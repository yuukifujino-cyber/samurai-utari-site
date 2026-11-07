import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f6f2e7]">
      {/* 光のオーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[18%] w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(31,74,134,0.08),transparent)] rounded-full" />
        <div className="absolute bottom-[15%] right-[18%] w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(139,37,0,0.05),transparent)] rounded-full" />
      </div>

      {/* 家紋（剣梅紋）大きく透かし */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80vmin] h-[80vmin] max-w-[720px] max-h-[720px] opacity-[0.12] hero-kamon-fade">
          <Image
            src="/logo/primary/logo-primary.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content：タイポグラフィ主役 */}
      <div
        className="relative z-10 px-6"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#0a2044]/40 mb-10 hero-fade-1">
          Philosophy
        </p>
        <h1 className="text-[38px] sm:text-5xl md:text-[104px] font-normal tracking-[0.15em] md:tracking-[0.22em] text-[#0a2044] leading-[1.45] hero-fade-2">
          夢なき者に、
          <br />
          <span className="text-[#8b2500]">理想を。</span>
        </h1>
        <p className="mt-12 md:mt-16 text-sm md:text-lg tracking-[0.3em] text-[#0a2044]/65 hero-fade-3">
          地方に、
          <span className="text-[#8b2500] mx-1">革命</span>
          を。
        </p>
        <dl className="mt-8 md:mt-10 space-y-4 md:space-y-3 hero-fade-3">
          <div className="md:flex md:items-baseline md:justify-center md:gap-4">
            <dt className="text-[12px] tracking-[0.15em] text-[#8b2500] mb-1 md:mb-0">企業の方へ</dt>
            <dd className="m-0 text-[14px] md:text-[17px] tracking-[0.05em] leading-[1.7] text-[#0a2044]">
              地方国公立大の学生チームが動く、
              <br className="sm:hidden" />
              経営支援会社
            </dd>
          </div>
          <div className="md:flex md:items-baseline md:justify-center md:gap-4">
            <dt className="text-[12px] tracking-[0.15em] text-[#8b2500] mb-1 md:mb-0">学生の方へ</dt>
            <dd className="m-0 text-[14px] md:text-[17px] tracking-[0.05em] leading-[1.7] text-[#0a2044]">
              地方国公立大生に特化した、
              <br className="sm:hidden" />
              ビジネススクール
            </dd>
          </div>
        </dl>
      </div>

      {/* 下部スクロールインジケータ */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#0a2044]/40 text-center hero-fade-4"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <span>スクロール</span>
        <div className="w-px h-10 bg-[#0a2044]/25 mx-auto mt-3 animate-pulse" />
      </div>

      <style>{`
        @keyframes hero-fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-kamon-fade-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 0.12; transform: scale(1); }
        }
        .hero-kamon-fade {
          animation: hero-kamon-fade-in 2.5s ease-out both;
          opacity: 0;
        }
        .hero-fade-1 { animation: hero-fade-in 1s ease-out 0.6s both; opacity: 0; }
        .hero-fade-2 { animation: hero-fade-in 1.2s ease-out 0.85s both; opacity: 0; }
        .hero-fade-3 { animation: hero-fade-in 1s ease-out 1.3s both; opacity: 0; }
        .hero-fade-4 { animation: hero-fade-in 1s ease-out 1.8s both; opacity: 0; }
      `}</style>
    </section>
  );
}
