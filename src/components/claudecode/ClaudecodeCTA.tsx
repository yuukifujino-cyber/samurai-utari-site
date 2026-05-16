import { ScrollFadeIn } from '@/components/scroll-fade-in'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

const included = [
  '月1：キックオフ2時間オフラインセッション（体験・設計書作成）',
  '月2：MVP実装 + セキュリティチェック（月2回セッション）',
  '月3：MVP完成・公開 + 継続顧問への打診',
  'Discordコミュニティ参加（同じ壁を持つ発信者との交流）',
]

export function ClaudecodeCTA() {
  return (
    <section id="cta" className="px-6 md:px-[60px] py-[120px] md:py-[180px] bg-[#0d1a2e]">
      <div className="max-w-[720px] mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <p className="text-[13px] tracking-[0.4em] text-white/50 mb-12">
              <span className="text-white/90 font-medium" style={serif}>2時間セッション</span>
              <span className="text-[10px] ml-3 uppercase text-white/35">/ Apply</span>
            </p>
            <h2
              className="text-2xl md:text-[38px] font-normal tracking-[0.05em] mb-6 text-white leading-[1.7]"
              style={serif}
            >
              あなたのMVPを、<br />
              今週中に動かしませんか。
            </h2>
            <p
              className="text-sm md:text-[15px] text-white/60 leading-[2.2] max-w-[520px] mx-auto"
              style={serif}
            >
              月額30万円 × 3ヶ月プログラム。定員は1期3〜4名。
              セッション後に申し込みを決めていただければ十分です。
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="p-8 md:p-10 bg-white/[0.03] border border-white/[0.08] mb-10">
            <p className="text-[12px] tracking-[0.2em] text-[#4a7fc8]/60 mb-6 uppercase" style={inter}>
              プログラムに含まれるもの
            </p>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-4 text-[14px] text-white/70 leading-[1.8]" style={serif}>
                  <span className="text-[#4a7fc8] shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="text-center">
            <a
              href="mailto:fujinoyuuki1997@gmail.com?subject=ClaudeCode研修MVPプログラム申し込み・お問い合わせ"
              className="inline-block px-12 py-5 bg-[#4a7fc8] text-white text-sm tracking-[0.15em] hover:bg-[#3a6ab8] transition-all mb-6"
              style={serif}
            >
              申し込む・詳細を聞く
            </a>
            <p className="text-[12px] text-white/30" style={serif}>
              まずはご相談から。お気軽にどうぞ。
            </p>
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
