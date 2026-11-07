import { FormrunEmbed } from "./formrun-embed";
import { ScrollFadeIn } from "./scroll-fade-in";

const FORM_ID = "@samurai-utari-2Ti4N0pylJFYS0HR0qyi";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-[160px] md:py-[200px] px-6 md:px-[60px] bg-[#123563] text-center"
    >
      <ScrollFadeIn>
        <p className="text-[13px] tracking-[0.4em] text-white/50 mb-12 md:mb-16">
          <span
            className="text-white/90 font-medium"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            連絡
          </span>
          <span className="text-[10px] ml-3 uppercase text-white/35">/ Contact</span>
        </p>
        <h2
          className="text-2xl md:text-[40px] font-normal tracking-[0.12em] md:tracking-[0.15em] mb-6 text-white leading-[1.6]"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          ご縁を、
          <br className="md:hidden" />
          お待ちしています。
        </h2>
        <p
          className="text-sm md:text-[15px] text-white/60 mb-14 leading-[2]"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          経営、新規事業、人事、組織。
          <br className="md:hidden" />
          領域を問わず、丸ごとご相談ください。
        </p>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="max-w-[720px] mx-auto bg-white rounded-sm p-2 text-left">
          <FormrunEmbed formId={FORM_ID} />
        </div>
        <p
          className="mt-8 text-[13px] text-white/70"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          メールでのご連絡は{" "}
          <a href="mailto:info@samurai-utari.co.jp" className="underline underline-offset-4 hover:text-white">
            info@samurai-utari.co.jp
          </a>
        </p>
      </ScrollFadeIn>
    </section>
  );
}
