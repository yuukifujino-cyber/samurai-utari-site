import Link from "next/link";
import { ScrollFadeIn } from "./scroll-fade-in";

const services = [
  {
    tag: "Career × Education",
    name: "人材教育事業",
    keyPhrase: "次世代キャリアスクール",
    description:
      "地方大学生のための次世代キャリアスクール。経営者の視座・思考をインストールし、ビジネス戦闘力のベースをつくる。育てた若手は、後続事業で地方企業に活かしていく。",
    comingSoon: true,
    href: null,
  },
  {
    tag: "AI × Reskilling",
    name: "生成AI研修事業",
    keyPhrase: "補助金フル活用型 AIリスキリング",
    description:
      "地方中小企業のための、補助金フル活用型AIリスキリング。研修設計から助成金申請までを巻き取り、顧客の作業は捺印と提出のみ。スキル習得で終わらず、現場で動く人材を残す。",
    comingSoon: false,
    href: "/ai-training",
  },
  {
    tag: "Talent × Architecture",
    name: "タレントマネジメント支援事業",
    keyPhrase: "人的資本経営の実装",
    description:
      "地方中小企業の人的資本経営の実現を、制度設計と運用システムの両面で伴走。評価・等級・配置を仕組みに落とし、自社で回せる体制を残して去る。哲学なきTM導入は続かないという前提で、上流から設計する。",
    comingSoon: false,
    href: null,
  },
];

export function Service() {
  return (
    <section
      id="service"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#0d1117] overflow-hidden"
    >
      {/* テック感：グリッドライン */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(74,127,200,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,127,200,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* 淡いオーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(74,127,200,0.15),transparent)] rounded-full" />
        <div className="absolute bottom-[15%] right-[15%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(18,53,99,0.25),transparent)] rounded-full" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-white/45 mb-12 md:mb-16">
            <span
              className="text-white/90 font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              事業
            </span>
            <span className="text-[10px] ml-3 uppercase text-white/35">/ Service</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-12 md:mb-14 text-white tracking-[0.05em] max-w-[820px]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            地方に、テクノロジーと
            <br />
            <span className="text-[#4a7fc8]">新しい風</span>を。
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ScrollFadeIn key={i} className="h-full">
              <div className="group relative h-full flex flex-col p-10 md:p-12 bg-white/[0.03] border border-white/[0.12] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#4a7fc8]/60 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(74,127,200,0.10)]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#123563] to-[#4a7fc8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className="mb-3 text-[11px] tracking-[0.3em] text-[#4a7fc8]/40 group-hover:text-[#4a7fc8]/90 transition-colors"
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300 }}
                >
                  {`0${i + 1} / 0${services.length}`}
                </div>
                <div className="mb-6">
                  <span
                    className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-[#4a7fc8]/40 text-[#4a7fc8] whitespace-nowrap"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    / {svc.tag}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3
                    className="text-2xl md:text-[28px] font-medium text-white m-0"
                    style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                  >
                    {svc.name}
                  </h3>
                  {/* 常にプレースホルダーを配置。Coming Soonが無いカードはvisibility:hiddenで同じスペースを確保 → 全カードで本文のY位置が完全整列する */}
                  <span
                    className="inline-block px-2.5 py-1 text-[10px] bg-[#4a7fc8]/20 text-[#4a7fc8] rounded-sm tracking-[0.08em] border border-[#4a7fc8]/30 whitespace-nowrap"
                    style={{
                      visibility: svc.comingSoon ? 'visible' : 'hidden',
                      fontFamily: '"Inter", sans-serif',
                    }}
                    aria-hidden={!svc.comingSoon}
                  >
                    Coming Soon
                  </span>
                </div>
                <p
                  className="text-[17px] md:text-[18px] font-medium text-white/90 leading-[1.6] mb-5"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {svc.keyPhrase}
                </p>
                <p
                  className="text-[14px] md:text-[15px] text-white/75 leading-[2]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {svc.description}
                </p>
                {svc.href && (
                  <div className="mt-8">
                    <Link
                      href={svc.href}
                      className="inline-block text-[12px] tracking-[0.2em] text-[#4a7fc8] border border-[#4a7fc8]/40 px-5 py-2 hover:bg-[#4a7fc8]/10 transition-colors"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      詳細・お申し込み →
                    </Link>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
