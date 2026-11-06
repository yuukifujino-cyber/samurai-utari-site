"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollFadeIn } from "./scroll-fade-in";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-[72px] font-normal text-[#123563] tracking-[0.02em]"
      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
    >
      {count}
      <span className="text-2xl md:text-3xl text-[#4a7fc8] ml-1">{suffix}</span>
    </span>
  );
}

export function Why() {
  return (
    <section id="why" className="py-[160px] md:py-[220px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              なぜ、いま
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ Why</span>
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-32">
          <ScrollFadeIn>
            <p
              className="text-xs tracking-[0.3em] text-[#4a7fc8] mb-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              01
            </p>
            <h3
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-8 text-[#123563] tracking-[0.05em]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              地方と都市の
              <br />
              埋めがたい格差。
            </h3>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p
              className="text-[15px] text-[#1c1e2b]/75 leading-[2.2]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              キャリアに対する視座、挑戦を後押しする文化、そもそもの選択肢の広さ──そのすべてに、埋めがたい格差が存在する。
              <br />
              <br />
              しかしそれは、人材のポテンシャルの差ではない。根本的には同じ大学生であり、本質的価値は変わらない。差が生じているのは、質の高い機会と、挑戦を受け止める文化だ。
            </p>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 py-16 md:py-20 border-y border-[#1c1e2b]/10 text-center mb-24 md:mb-32">
            {[
              { n: 493, s: "+", l: "累計支援学生数" },
              { n: 10, s: "+", l: "創業企業数" },
              { n: 6, s: "", l: "拠点都市" },
              { n: 2, s: "", l: "事業領域" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <CountUp target={d.n} suffix={d.s} />
                <p
                  className="text-[12px] text-[#1c1e2b]/55 mt-4 tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {d.l}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollFadeIn>
            <p
              className="text-xs tracking-[0.3em] text-[#4a7fc8] mb-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              02
            </p>
            <h3
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-8 text-[#123563] tracking-[0.05em]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              誰も手を入れて
              <br />
              こなかった領域。
            </h3>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p
              className="text-[15px] text-[#1c1e2b]/75 leading-[2.2]"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              地方には、本質的価値と市場評価のギャップ──未開拓の人的資本が膨大に眠っている。既存の大手には市場規模が小さく、スタートアップには長期伴走の体力がいる。
              <br />
              <br />
              構造的に、手つかずのまま残された領域。私たちは、この格差に正面から向き合う最初の会社です。
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
