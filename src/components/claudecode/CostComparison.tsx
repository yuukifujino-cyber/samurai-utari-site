import { ScrollFadeIn } from '@/components/scroll-fade-in'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

function SectionLabel({ ja, en }: { ja: string; en: string }) {
  return (
    <p className="text-[13px] tracking-[0.4em] text-white/45 mb-12">
      <span className="text-white/90 font-medium" style={serif}>{ja}</span>
      <span className="text-[10px] ml-3 uppercase text-white/35">/ {en}</span>
    </p>
  )
}

const comparisons = [
  {
    label: 'AI診断ツール',
    traditional: { cost: '約250万円', duration: '4〜5ヶ月' },
  },
  {
    label: 'AIチャットBot',
    traditional: { cost: '約300万円', duration: '3〜6ヶ月' },
  },
  {
    label: '自動レポート生成',
    traditional: { cost: '約200万円', duration: '2〜4ヶ月' },
  },
  {
    label: 'LP＋フォーム',
    traditional: { cost: '約100万円', duration: '1〜3ヶ月' },
  },
]

export function CostComparison() {
  return (
    <section className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-[#0a0e14]">
      <div className="max-w-[900px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel ja="なぜ今なのか" en="Why Now" />
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.8] mb-10 text-white tracking-[0.03em] max-w-[760px]"
            style={serif}
          >
            コーディング工数がゼロになった。<br className="hidden md:block" />
            <span className="text-[#4a7fc8]">開発コストの構造が、根本から変わった。</span>
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-6">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-3 text-[11px] text-white/30 text-center px-4" style={inter}>
              <div className="text-left">開発内容</div>
              <div>従来の外注</div>
              <div>ClaudeCode</div>
            </div>
            <div className="space-y-2">
              {comparisons.map((item) => (
                <div key={item.label} className="grid grid-cols-[1fr_1fr_1fr] gap-2 items-center">
                  <div className="text-[14px] text-white/70 px-4" style={serif}>{item.label}</div>
                  <div className="bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                    <p className="text-[16px] text-white/50 font-light" style={inter}>{item.traditional.cost}</p>
                    <p className="text-[11px] text-white/30 mt-1" style={serif}>{item.traditional.duration}</p>
                  </div>
                  <div className="bg-[#4a7fc8]/10 border border-[#4a7fc8]/40 p-4 text-center">
                    <p className="text-[16px] text-white font-light" style={inter}>月2万円</p>
                    <p className="text-[11px] text-[#4a7fc8]/80 mt-1" style={serif}>2時間</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-center text-[16px] md:text-[18px] text-white/50 mt-12 leading-[2]" style={serif}>
            300万円が惜しかったんじゃない。
            <span className="text-white"> 6ヶ月が、惜しかった。</span>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
