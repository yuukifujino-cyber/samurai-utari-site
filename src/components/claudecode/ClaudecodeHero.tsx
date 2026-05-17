import { ScrollFadeIn } from '@/components/scroll-fade-in'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

export function ClaudecodeHero() {
  return (
    <section className="relative px-6 md:px-[60px] pt-[80px] pb-[140px] md:pt-[100px] md:pb-[180px] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(74,127,200,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,127,200,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(74,127,200,0.12),transparent)] rounded-full pointer-events-none" />

      <div className="relative max-w-[900px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[11px] tracking-[0.4em] text-white/40 mb-10 uppercase" style={inter}>
            ClaudeCode / 自前ツール制作プログラム
          </p>
          <h1
            className="text-[28px] md:text-[54px] font-normal leading-[1.7] mb-10 tracking-[0.03em]"
            style={serif}
          >
            自分専用のツールを、<br />
            <span className="text-[#4a7fc8]">持てる時代になった。</span>
          </h1>
          <div className="text-[15px] md:text-[18px] text-white/60 leading-[2.2] mb-10 max-w-[700px] space-y-1" style={serif}>
            <p>これまで：外注するか、SaaSで妥協するか</p>
            <p className="text-white/80">これから：<span className="text-[#4a7fc8]">2時間で、自分のものを作る</span></p>
          </div>
          <p className="text-[14px] md:text-[16px] text-white/50 leading-[2.2] mb-14 max-w-[600px]" style={serif}>
            大企業はエンジニアチームが作る。個人はSaaSを買って妥協する。<br />
            その格差が、なくなった。
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#diagnosis"
              className="inline-block px-10 py-4 bg-[#4a7fc8] text-white text-sm tracking-[0.15em] hover:bg-[#3a6ab8] transition-all"
              style={serif}
            >
              あなたが持てるツールを診断する
            </a>
            <p className="text-[12px] text-white/35" style={serif}>
              ※ 無料・登録不要
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
