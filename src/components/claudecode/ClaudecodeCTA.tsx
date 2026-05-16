import { ScrollFadeIn } from '@/components/scroll-fade-in'
import { FormrunEmbed } from '@/components/formrun-embed'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }

const FORM_ID = '@samurai-utari-2Ti4N0pylJFYS0HR0qyi'

export function ClaudecodeCTA() {
  return (
    <section id="cta" className="px-6 md:px-[60px] py-[120px] md:py-[180px] bg-[#0d1a2e]">
      <div className="max-w-[720px] mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-[13px] tracking-[0.4em] text-white/50 mb-12">
              <span className="text-white/90 font-medium" style={serif}>申し込み</span>
              <span className="text-[10px] ml-3 uppercase text-white/35">/ Apply</span>
            </p>
            <h2
              className="text-2xl md:text-[38px] font-normal tracking-[0.05em] mb-6 text-white leading-[1.7]"
              style={serif}
            >
              診断で出てきたMVPを、<br />
              一緒に作りませんか。
            </h2>
            <p
              className="text-sm md:text-[15px] text-white/60 leading-[2.2] max-w-[520px] mx-auto"
              style={serif}
            >
              2時間のセッションで、あなたのIPをプロダクトに変えます。
              まずは話だけでも構いません。
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="bg-white rounded-sm p-2">
            <FormrunEmbed formId={FORM_ID} />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-center text-[11px] text-white/15 mt-16 leading-[2]" style={serif}>
            このページはClaudeCodeで作られています。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
