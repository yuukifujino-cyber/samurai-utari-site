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

const scenarios = [
  {
    label: '売上・収益ダッシュボード',
    pain: 'YouTube収益、コーチング料、セミナー収入——複数の収益源を一画面で把握できていない。Freeeで請求管理はできても、「今月の本当の手取り」がリアルタイムで見えない。',
    options: [
      {
        label: 'エンジニアに外注',
        cost: '200〜400万円',
        duration: '3〜5ヶ月',
        fit: '自社専用',
        fitGood: true,
        highlight: false,
      },
      {
        label: '既製ツール（Freee等）',
        cost: '月3,000〜1万円',
        duration: '即日',
        fit: '汎用品で妥協',
        fitGood: false,
        highlight: false,
      },
      {
        label: 'AI自社ツール',
        cost: '月15,000円〜',
        duration: '2時間/本',
        fit: '自社専用',
        fitGood: true,
        highlight: true,
      },
    ],
  },
  {
    label: 'SNS分析ダッシュボード',
    pain: 'インスタのインサイトをスプレッドシートに手作業でまとめて分析。SaaSは高いうえに、自社のKPIに合った指標が出せない。',
    options: [
      {
        label: 'エンジニアに外注',
        cost: '150〜300万円',
        duration: '2〜4ヶ月',
        fit: '自社専用',
        fitGood: true,
        highlight: false,
      },
      {
        label: '既製ツール（Sprout Social等）',
        cost: '月3〜5万円',
        duration: '即日',
        fit: '欲しいデータが出せない',
        fitGood: false,
        highlight: false,
      },
      {
        label: 'AI自社ツール',
        cost: '月15,000円〜',
        duration: '2時間/本',
        fit: '自社専用',
        fitGood: true,
        highlight: true,
      },
    ],
  },
  {
    label: 'クライアント管理システム',
    pain: 'Notionやスプシでクライアントのフェーズを管理中。誰がどの状態かを把握するたびに時間がかかる。HubSpotやSalesforceは大企業向けで複雑すぎる。',
    options: [
      {
        label: 'エンジニアに外注',
        cost: '200〜500万円',
        duration: '3〜6ヶ月',
        fit: '自社専用',
        fitGood: true,
        highlight: false,
      },
      {
        label: '既製ツール（HubSpot等）',
        cost: '月1〜5万円',
        duration: '1週間',
        fit: '機能が多すぎて使いこなせない',
        fitGood: false,
        highlight: false,
      },
      {
        label: 'AI自社ツール',
        cost: '月15,000円〜',
        duration: '2時間/本',
        fit: '自社専用',
        fitGood: true,
        highlight: true,
      },
    ],
  },
]

export function CostComparison() {
  return (
    <section className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-[#0a0e14]">
      <div className="max-w-[900px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel ja="なぜ今なのか" en="Why Now" />
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.8] mb-6 text-white tracking-[0.03em] max-w-[760px]"
            style={serif}
          >
            外注するか、SaaSで妥協するか。<br className="hidden md:block" />
            <span className="text-[#4a7fc8]">その二択が、消えた。</span>
          </h2>
          <p className="text-[15px] text-white/50 leading-[2.0] mb-16 max-w-[680px]" style={serif}>
            3つを並べると、答えは見えてくる。
          </p>
        </ScrollFadeIn>

        <div className="space-y-10">
          {scenarios.map((scenario, si) => (
            <ScrollFadeIn key={scenario.label}>
              <div className={`border p-8 md:p-10 ${si === 0 ? 'border-[#4a7fc8]/40 bg-[#4a7fc8]/[0.04]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
                <div className="mb-6">
                  <p className="text-[11px] tracking-[0.3em] text-white/30 mb-2 uppercase" style={inter}>
                    {String(si + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-[18px] md:text-[22px] font-normal text-white mb-3" style={serif}>
                    {scenario.label}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-white/45 leading-[1.9]" style={serif}>
                    {scenario.pain}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {scenario.options.map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-4 md:p-5 border flex flex-col gap-4 ${
                        opt.highlight
                          ? 'border-[#4a7fc8]/60 bg-[#4a7fc8]/10'
                          : 'border-white/[0.07] bg-white/[0.02]'
                      }`}
                    >
                      <p
                        className={`text-[10px] md:text-[11px] tracking-[0.15em] leading-[1.6] ${opt.highlight ? 'text-[#4a7fc8]' : 'text-white/35'}`}
                        style={inter}
                      >
                        {opt.highlight ? '★ ' : ''}{opt.label}
                      </p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[9px] text-white/25 mb-1 uppercase tracking-widest" style={inter}>コスト</p>
                          <p className={`text-[13px] md:text-[15px] font-light leading-[1.4] ${opt.highlight ? 'text-white' : 'text-white/55'}`} style={inter}>
                            {opt.cost}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] text-white/25 mb-1 uppercase tracking-widest" style={inter}>期間</p>
                          <p className={`text-[13px] md:text-[15px] font-light leading-[1.4] ${opt.highlight ? 'text-white' : 'text-white/55'}`} style={inter}>
                            {opt.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] text-white/25 mb-1 uppercase tracking-widest" style={inter}>適合</p>
                          <p
                            className={`text-[12px] md:text-[13px] leading-[1.4] ${
                              opt.fitGood
                                ? opt.highlight ? 'text-[#4a7fc8]' : 'text-white/55'
                                : 'text-white/30'
                            }`}
                            style={serif}
                          >
                            {opt.fitGood ? '◎ ' : '△ '}{opt.fit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn>
          <p className="text-center text-[15px] md:text-[17px] text-white/45 mt-16 leading-[2]" style={serif}>
            どれか一つでも当てはまるなら、<br className="md:hidden" />
            <span className="text-white"> あなたにも持てる自社ツールがある。</span>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
