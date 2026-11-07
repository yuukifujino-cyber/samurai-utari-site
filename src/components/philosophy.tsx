import Image from "next/image";
import { RippleField } from "./ripple-field";
import { ScrollFadeIn } from "./scroll-fade-in";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-[160px] md:py-[240px] px-6 md:px-[60px] bg-[#123563] overflow-hidden"
    >
      {/* 鏡花水月：夜の水面に映る家紋と波紋 */}
      <RippleField tone="dark" logoSrc="/logo/primary/logo-primary.svg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80vmin] h-[80vmin] max-w-[720px] max-h-[720px] text-white opacity-[0.05]">
            <Image src="/logo/sub/logo-sub.svg" alt="" fill className="object-contain" />
          </div>
        </div>
      </RippleField>

      <div className="relative max-w-[980px] mx-auto">
        <ScrollFadeIn>
          <p
            className="text-[10px] md:text-xs tracking-[0.5em] text-white/55 uppercase mb-12 md:mb-16 text-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Philosophy
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-center text-[38px] sm:text-5xl md:text-[72px] lg:text-[96px] font-normal leading-[1.5] md:leading-[1.4] tracking-[0.15em] md:tracking-[0.25em] text-white mb-20 md:mb-28"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            夢なき者に、
            <br />
            <span className="text-[#e8dfc9]">理想を。</span>
          </h2>
        </ScrollFadeIn>

        {/* 詩的な補足文 */}
        <ScrollFadeIn>
          <div
            className="max-w-[720px] mx-auto text-white/85 text-[15px] md:text-base leading-[2.4] md:leading-[2.6]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            <p>
              夢がないのは、あなたのせいじゃない。
              <br />
              見えてないから、選べない。
              <br />
              選べないから、動けない。
              <br />
              情報は山ほどあるのに、手ざわりがない──それが今。
            </p>
            <p className="mt-8">
              だから、私たちは見せる。
              <br />
              地図みたいに、道すじを。
              <br />
              会わせる。近い距離で、背中に。
              <br />
              そしてやってみる。小さく、すぐに。
            </p>
            <p className="mt-8 text-[#e8dfc9]">
              「こんな生き方もある。」
              <br />
              「これ、やってみたら面白いかも。」
            </p>
            <p className="mt-8">
              そう思える理想の“見える形”を、私たちは背中で見せ続けます。
              <br />
              憧れを設計図に、迷いを一歩目に。
              <br />
              その先で、理想はちゃんと、あなたのものになる。
            </p>
          </div>
        </ScrollFadeIn>

        {/* 革命コピー */}
        <ScrollFadeIn>
          <p
            className="mt-16 md:mt-24 text-center text-sm md:text-base tracking-[0.4em] text-[#e8dfc9]/85"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            ──　地方に、革命を。　──
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
