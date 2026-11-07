import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUp, Building2, GraduationCap, Handshake } from "lucide-react";
import { ScrollFadeIn } from "./scroll-fade-in";
import { FlowArrow, IconCircle, interFont, serifFont } from "./ui-parts";

const businessMap: { icon: LucideIcon; name: string; detail: string }[] = [
  { icon: GraduationCap, name: "人材教育事業", detail: "地方国公立大生が、実学で経営を学ぶ" },
  { icon: Handshake, name: "コンサルティング事業", detail: "社長の右腕として伴走する" },
  { icon: Building2, name: "地方企業", detail: "経営が前に進む" },
];

function BusinessMap() {
  return (
    <div>
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 md:gap-4">
        {businessMap.map((node, i) => (
          <div key={node.name} className="contents">
            <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 p-5 md:p-6 h-full border border-white/[0.15] bg-white/[0.03]">
              <IconCircle icon={node.icon} size="lg" />
              <div>
                <p className="text-[17px] font-medium text-white mb-1" style={serifFont}>
                  {node.name}
                </p>
                <p className="text-[13px] text-white/75 leading-[1.7] m-0" style={serifFont}>
                  {node.detail}
                </p>
              </div>
            </div>
            {i < businessMap.length - 1 && <FlowArrow className="justify-self-center" />}
          </div>
        ))}
      </div>

      {/* 現場の経験が教育へ戻る、循環の矢印 */}
      <div className="hidden md:block relative h-14 mt-1 ml-[14%] mr-[50%] border-x border-b border-dashed border-[#e8dfc9]/60">
        <ArrowUp size={18} className="absolute -top-1 -left-[10px] text-[#e8dfc9]" aria-hidden="true" />
        <p
          className="absolute left-1/2 -translate-x-1/2 bottom-[-11px] px-3 bg-[#123563] text-[13px] text-[#e8dfc9] whitespace-nowrap m-0"
          style={serifFont}
        >
          現場の経験が、次の学びへ
        </p>
      </div>
      <p className="md:hidden flex items-center justify-center gap-2 mt-4 text-[13px] text-[#e8dfc9]" style={serifFont}>
        <ArrowUp size={16} aria-hidden="true" />
        現場の経験が、次の学びへ
      </p>
    </div>
  );
}

export function Service() {
  return (
    <section id="service" className="py-[120px] md:py-[180px] px-6 md:px-[60px] bg-[#123563]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-white/70 mb-12 md:mb-16">
            <span className="text-white font-medium" style={serifFont}>
              事業
            </span>
            <span className="text-[11px] ml-3 uppercase text-white/60">/ Service</span>
          </p>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-12 md:mb-14 text-white tracking-[0.05em]"
            style={serifFont}
          >
            若者を育て、
            <br />
            地方の経営を<span className="text-[#e8dfc9]">前へ</span>。
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <BusinessMap />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-5">
            <Link
              href="/consulting"
              className="group block p-7 md:p-8 border border-[#e8dfc9]/40 hover:bg-[#e8dfc9] transition-colors"
            >
              <p
                className="text-[12px] tracking-[0.2em] uppercase text-[#e8dfc9] group-hover:text-[#8b2500] mb-3"
                style={interFont}
              >
                For Companies
              </p>
              <p className="text-[22px] font-medium text-white group-hover:text-[#123563] mb-2" style={serifFont}>
                コンサルティング事業
              </p>
              <p className="text-[14px] leading-[1.8] text-white/80 group-hover:text-[#123563] mb-5" style={serifFont}>
                地方国公立大の学生チームが動く、経営支援
              </p>
              <span
                className="text-[13px] tracking-[0.1em] text-[#e8dfc9] group-hover:text-[#123563] underline underline-offset-4"
                style={serifFont}
              >
                詳しく見る →
              </span>
            </Link>

            <div className="p-7 md:p-8 border border-white/20">
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#e8dfc9] mb-3" style={interFont}>
                For Students
              </p>
              <p className="text-[22px] font-medium text-white mb-2" style={serifFont}>
                人材教育事業
              </p>
              <p className="text-[14px] leading-[1.8] text-white/80 mb-5" style={serifFont}>
                地方国公立大生に特化した、ビジネススクール
              </p>
              <span
                className="inline-block px-2.5 py-1 text-[12px] tracking-[0.08em] border border-[#e8dfc9]/50 text-[#e8dfc9]"
                style={interFont}
              >
                Coming Soon
              </span>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
