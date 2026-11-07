"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * 水面に映る家紋と、受け継がれていく波紋。
 *
 * 中心の一滴から波紋が広がり、家紋の花弁の方向に届くと朱の点が灯って
 * 次の波紋が生まれる。これを世代ごとに外へ繰り返す。
 * WebGLが使えない環境や、動きを減らす設定の環境では children の静止画を表示する。
 */

const MAX_RIPPLES = 16;
const RIPPLE_LIFE = 9;
const RIPPLE_SPEED = 0.12;
const CYCLE_SECONDS = 10;
const FIRST_RADIUS = 0.42;
const SECOND_RADIUS = 0.85;
const PETALS = 5;

const VERTEX_SHADER = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec4 uRipples[${MAX_RIPPLES}];
uniform sampler2D uTex;
uniform float uLogoSize;
uniform float uLogoOpacity;
uniform float uMono;
uniform float uAmbient;
uniform float uLine;
uniform float uShine;
uniform vec3 uInk;
uniform vec3 uHighlight;
uniform vec3 uAccent;

vec4 over(vec4 base, vec3 color, float alpha) {
  return vec4(base.rgb * (1.0 - alpha) + color * alpha, base.a + alpha * (1.0 - base.a));
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  float height = 0.0;
  vec2 slope = vec2(0.0);
  float drops = 0.0;

  for (int i = 0; i < ${MAX_RIPPLES}; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (r.w <= 0.0 || age < 0.0 || age > ${RIPPLE_LIFE.toFixed(1)}) continue;
    vec2 delta = p - r.xy;
    float dist = length(delta) + 0.0001;
    float x = dist - age * ${RIPPLE_SPEED.toFixed(2)};
    float envelope = exp(-x * x * 320.0) * exp(-age * 0.34) * r.w * smoothstep(0.0, 0.02, dist);
    height += sin(x * 150.0) * envelope;
    slope += delta / dist * cos(x * 150.0) * envelope;
    if (r.w < 0.95) {
      drops += (1.0 - smoothstep(0.003, 0.009, dist)) * smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(0.8, 2.2, age));
    }
  }

  vec2 sway = vec2(sin(p.y * 34.0 + uTime * 0.7), cos(p.x * 26.0 - uTime * 0.5)) * 0.0016 * uAmbient;
  vec2 q = p + sway - slope * 0.012;
  vec2 uv = vec2(q.x / uLogoSize + 0.5, 0.5 - q.y / uLogoSize);

  vec4 color = vec4(0.0);
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
    vec4 logo = texture2D(uTex, uv);
    vec3 logoColor = mix(logo.rgb, uInk, uMono);
    color = over(color, logoColor, logo.a * uLogoOpacity);
  }

  color = over(color, uInk, smoothstep(0.05, 0.75, -height) * uLine);
  color = over(color, uHighlight, smoothstep(0.05, 0.75, height) * uShine);
  color = over(color, uAccent, clamp(drops, 0.0, 1.0) * 0.85);
  gl_FragColor = color;
}
`;

const TONES = {
  /** 明鏡止水：明るい水面。ほとんど揺れず、波紋だけが通る */
  light: {
    logoOpacity: 0.12,
    mono: 0,
    ambient: 0.1,
    line: 0.2,
    shine: 0.8,
    ink: [0.071, 0.208, 0.388],
    highlight: [1, 1, 1],
    accent: [0.545, 0.145, 0],
  },
  /** 鏡花水月：夜の水面。映った家紋が静かに揺れる */
  dark: {
    logoOpacity: 0.08,
    mono: 1,
    ambient: 1,
    line: 0.16,
    shine: 0.22,
    ink: [0.91, 0.875, 0.788],
    highlight: [0.91, 0.875, 0.788],
    accent: [0.91, 0.5, 0.33],
  },
} as const;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

export function RippleField({
  tone,
  logoSrc,
  children,
}: {
  tone: keyof typeof TONES;
  logoSrc: string;
  children: ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true });
    if (!gl) return;

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uRes = uniform("uRes");
    const uTime = uniform("uTime");
    const uRipples = uniform("uRipples");
    const uLogoSize = uniform("uLogoSize");
    const settings = TONES[tone];
    gl.uniform1f(uniform("uLogoOpacity"), settings.logoOpacity);
    gl.uniform1f(uniform("uMono"), settings.mono);
    gl.uniform1f(uniform("uAmbient"), settings.ambient);
    gl.uniform1f(uniform("uLine"), settings.line);
    gl.uniform1f(uniform("uShine"), settings.shine);
    gl.uniform3fv(uniform("uInk"), settings.ink);
    gl.uniform3fv(uniform("uHighlight"), settings.highlight);
    gl.uniform3fv(uniform("uAccent"), settings.accent);

    const ripples = new Float32Array(MAX_RIPPLES * 4);
    let nextSlot = 0;
    const addRipple = (x: number, y: number, start: number, strength: number) => {
      ripples.set([x, y, start, strength], nextSlot * 4);
      nextSlot = (nextSlot + 1) % MAX_RIPPLES;
    };

    /** 中心の一滴から、花弁の方向へ、さらに外へと世代を重ねて波紋を予約する */
    type Scheduled = { at: number; x: number; y: number; strength: number };
    let queue: Scheduled[] = [];
    const scheduleGeneration = (start: number) => {
      queue.push({ at: start, x: 0, y: 0, strength: 1 });
      const offset = Math.random() * Math.PI * 2;
      const firstAt = start + FIRST_RADIUS / RIPPLE_SPEED;
      for (let i = 0; i < PETALS; i++) {
        const angle = offset + (i / PETALS) * Math.PI * 2;
        const x = Math.cos(angle) * FIRST_RADIUS;
        const y = Math.sin(angle) * FIRST_RADIUS;
        queue.push({ at: firstAt, x, y, strength: 0.5 });
        if (i % 2 === 0) {
          queue.push({
            at: firstAt + (SECOND_RADIUS - FIRST_RADIUS) / RIPPLE_SPEED,
            x: Math.cos(angle + 0.3) * SECOND_RADIUS,
            y: Math.sin(angle + 0.3) * SECOND_RADIUS,
            strength: 0.3,
          });
        }
      }
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1 : 1.5);
      const width = Math.max(1, Math.round(canvas.clientWidth * scale));
      const height = Math.max(1, Math.round(canvas.clientHeight * scale));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uRes, width, height);
      const logoPixels = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8, 720) * scale;
      gl.uniform1f(uLogoSize, logoPixels / Math.min(width, height));
    };

    let time = 0;
    let lastFrame = 0;
    let nextCycle = 0.4;
    let frame = 0;
    let visible = true;
    let lastPointer = 0;

    const render = (now: number) => {
      frame = requestAnimationFrame(render);
      if (!visible) {
        lastFrame = now;
        return;
      }
      time += Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;

      if (time >= nextCycle) {
        scheduleGeneration(nextCycle);
        nextCycle += CYCLE_SECONDS;
      }
      queue = queue.filter((item) => {
        if (item.at > time) return true;
        addRipple(item.x, item.y, item.at, item.strength);
        return false;
      });

      gl.uniform1f(uTime, time);
      gl.uniform4fv(uRipples, ripples);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const toWater = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const unit = Math.min(rect.width, rect.height);
      return {
        x: (event.clientX - rect.left - rect.width / 2) / unit,
        y: (rect.height / 2 - (event.clientY - rect.top)) / unit,
      };
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || performance.now() - lastPointer < 700) return;
      lastPointer = performance.now();
      const { x, y } = toWater(event);
      addRipple(x, y, time, 0.25);
    };
    const onPointerDown = (event: PointerEvent) => {
      const { x, y } = toWater(event);
      addRipple(x, y, time, 0.6);
    };

    const host = canvas.parentElement?.parentElement;
    host?.addEventListener("pointermove", onPointerMove);
    host?.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", resize);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let cancelled = false;
    const image = new window.Image();
    image.onload = () => {
      if (cancelled) return;
      const size = 1024;
      const raster = document.createElement("canvas");
      raster.width = size;
      raster.height = size;
      raster.getContext("2d")?.drawImage(image, 0, 0, size, size);
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, raster);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      resize();
      lastFrame = performance.now();
      frame = requestAnimationFrame(render);
      setReady(true);
    };
    image.src = logoSrc;

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      host?.removeEventListener("pointermove", onPointerMove);
      host?.removeEventListener("pointerdown", onPointerDown);
    };
  }, [tone, logoSrc]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
