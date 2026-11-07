import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BookOpen,
  Bot,
  Building2,
  ChartColumn,
  ClipboardList,
  Footprints,
  GraduationCap,
  Handshake,
  Lightbulb,
  ListChecks,
  Megaphone,
  MessageCircle,
  Network,
  Sprout,
  Star,
  Target,
  UserRound,
  UserRoundCheck,
  UserRoundSearch,
  Users,
} from "lucide-react";
import { ScrollFadeIn } from "./scroll-fade-in";

const serifFont = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' };
const interFont = { fontFamily: '"Inter", sans-serif' };

type IconText = { icon: LucideIcon; name: string; detail: string };

const businessMap: IconText[] = [
  { icon: GraduationCap, name: "人材教育事業", detail: "地方国公立大生が、実学で経営を学ぶ" },
  { icon: Handshake, name: "コンサルティング事業", detail: "社長の右腕として伴走する" },
  { icon: Building2, name: "地方企業", detail: "経営が前に進む" },
];

const educationSteps: IconText[] = [
  { icon: BookOpen, name: "短期集中で学ぶ", detail: "経営者の視座・思考をインストール" },
  { icon: Footprints, name: "実践する", detail: "プロジェクトでアウトプット" },
  { icon: Users, name: "つながる", detail: "世代を超えたOBOGコミュニティ" },
];

const consultingAreas: { icon: LucideIcon; name: string; studentStrength?: boolean }[] = [
  { icon: Target, name: "経営戦略" },
  { icon: ChartColumn, name: "経営企画" },
  { icon: Lightbulb, name: "新規事業開発" },
  { icon: Megaphone, name: "マーケティング" },
  { icon: Network, name: "人事・組織構造" },
  { icon: UserRoundSearch, name: "採用支援・人材育成", studentStrength: true },
  { icon: Bot, name: "AI活用・業務改革", studentStrength: true },
  { icon: ListChecks, name: "プロジェクト推進" },
];

const consultingFlow: IconText[] = [
  { icon: MessageCircle, name: "ヒアリング", detail: "まずお話を伺う" },
  { icon: ClipboardList, name: "ご提案", detail: "御社に合う形を考える" },
  { icon: Users, name: "チーム組成", detail: "最適な体制を組む" },
  { icon: Sprout, name: "伴走・実行", detail: "自社で回せる形に" },
];

const clientValues: IconText[] = [
  { icon: UserRoundCheck, name: "合う人を見極める", detail: "経歴書だけでなく、実力・実績と人柄を見て選ぶ" },
  { icon: BadgeCheck, name: "実行の手まで揃う", detail: "提案で終わらず、現場の実務まで" },
  { icon: Sprout, name: "若い世代との縁が残る", detail: "若者の目線と接点が、社内に残る" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[12px] tracking-[0.3em] text-[#e8dfc9]" style={serifFont}>
      {children}
    </p>
  );
}

function IconCircle({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "md" | "lg" }) {
  const box = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const iconSize = size === "lg" ? 28 : 22;
  return (
    <span
      className={`inline-flex items-center justify-center ${box} rounded-full border border-[#e8dfc9]/50 bg-[#e8dfc9]/10 text-[#e8dfc9] shrink-0`}
    >
      <Icon size={iconSize} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}

/** 横並びのときは右、縦並びのときは下を指す矢印 */
function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[#e8dfc9] ${className}`} aria-hidden="true">
      <ArrowRight size={20} className="hidden md:block" />
      <ArrowDown size={20} className="md:hidden" />
    </span>
  );
}

function CardHeader({
  index,
  tag,
  name,
  keyPhrase,
}: {
  index: string;
  tag: string;
  name: string;
  keyPhrase: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center gap-4 mb-5 flex-wrap">
        <span className="text-[11px] tracking-[0.3em] text-[#e8dfc9]/70" style={interFont}>
          {index}
        </span>
        <span
          className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-[#e8dfc9]/40 text-[#e8dfc9] whitespace-nowrap"
          style={interFont}
        >
          / {tag}
        </span>
      </div>
      <h3 className="text-2xl md:text-[28px] font-medium text-white mb-3" style={serifFont}>
        {name}
      </h3>
      <p className="text-[17px] md:text-[18px] font-medium text-white/90 leading-[1.6] m-0" style={serifFont}>
        {keyPhrase}
      </p>
    </>
  );
}

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
                <p className="text-[13px] text-white/65 leading-[1.7] m-0" style={serifFont}>
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
      <p
        className="md:hidden flex items-center justify-center gap-2 mt-4 text-[13px] text-[#e8dfc9]"
        style={serifFont}
      >
        <ArrowUp size={16} aria-hidden="true" />
        現場の経験が、次の学びへ
      </p>
    </div>
  );
}

function EducationCard() {
  return (
    <div className="p-5 md:p-12 bg-white/[0.03] border border-white/[0.12] backdrop-blur-sm">
      <CardHeader
        index="01 / 02"
        tag="Career × Education"
        name="人材教育事業"
        keyPhrase={
          <>
            地方国公立大生に特化した、
            <br className="md:hidden" />
            実学のビジネススクール
          </>
        }
      />
      <p className="mt-3 mb-0 text-[14px] md:text-[15px] text-white/75 leading-[1.9]" style={serifFont}>
        入社1年目から経営層と会話できる人材を育てる。
        <br className="hidden md:block" />
        受講者試験を通過し、自己投資して学ぶ北大生らが集まっています。
      </p>
      <ol className="mt-8 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 md:gap-4 list-none m-0 p-0">
        {educationSteps.map((step, i) => (
          <li key={step.name} className="contents">
            <div className="flex items-center gap-4">
              <IconCircle icon={step.icon} />
              <div>
                <p className="text-[16px] font-medium text-white mb-0.5" style={serifFont}>
                  {step.name}
                </p>
                <p className="text-[13px] text-white/65 m-0" style={serifFont}>
                  {step.detail}
                </p>
              </div>
            </div>
            {i < educationSteps.length - 1 && <FlowArrow className="ml-3 md:ml-0" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ConsultingCard() {
  return (
    <div className="p-5 md:p-12 bg-white/[0.03] border border-white/[0.12] backdrop-blur-sm">
      <CardHeader
        index="02 / 02"
        tag="Strategy × Execution"
        name="コンサルティング事業"
        keyPhrase="社長の右腕として、経営の困りごとを丸ごと引き受ける。"
      />

      <div className="mt-10">
        <SectionLabel>支援領域</SectionLabel>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 list-none m-0 p-0">
          {consultingAreas.map((area) => {
            const Icon = area.icon;
            return (
              <li
                key={area.name}
                className={`relative flex flex-col items-center justify-center gap-3 p-2 md:p-5 min-h-[110px] md:min-h-[120px] text-center border ${
                  area.studentStrength
                    ? "border-[#e8dfc9] bg-[#e8dfc9]/15"
                    : "border-white/[0.12] bg-white/[0.04]"
                }`}
              >
                {area.studentStrength && (
                  <Star
                    size={14}
                    className="absolute top-2.5 right-2.5 text-[#e8dfc9] fill-[#e8dfc9]"
                    aria-hidden="true"
                  />
                )}
                <Icon size={26} strokeWidth={1.5} className="text-[#e8dfc9]" aria-hidden="true" />
                <p className="text-[13px] md:text-[15px] font-medium text-white leading-[1.5] m-0" style={serifFont}>
                  {area.name}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="flex items-center gap-2 mt-3 text-[13px] text-white/70" style={serifFont}>
          <Star size={13} className="text-[#e8dfc9] fill-[#e8dfc9] shrink-0" aria-hidden="true" />
          北大生チームが特に得意とする領域
        </p>
      </div>

      <div className="mt-10 p-6 md:p-8 border-l-2 border-[#e8dfc9] bg-[#e8dfc9]/[0.08]">
        <p className="text-[17px] md:text-[18px] font-medium text-white leading-[1.6] mb-6" style={serifFont}>
          ここにないテーマも、
          <br className="md:hidden" />
          チームを組んで支援します。
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-3 md:gap-6">
          <div className="flex md:flex-col items-center gap-3 md:gap-2 text-center">
            <IconCircle icon={Building2} />
            <p className="text-[14px] text-white m-0" style={serifFont}>
              企業
            </p>
          </div>
          <FlowArrow className="md:mt-3.5" />
          <div className="flex md:flex-col items-center gap-3 md:gap-2 text-center">
            <IconCircle icon={UserRound} />
            <p className="text-[14px] text-white m-0" style={serifFont}>
              パートナー 藤野
              <span className="block text-[12px] text-white/65">課題を見立てる責任者</span>
            </p>
          </div>
          <FlowArrow className="md:mt-3.5" />
          <div className="flex md:flex-col items-center gap-3 md:gap-2 text-center">
            <IconCircle icon={ClipboardList} />
            <p className="text-[14px] text-white m-0" style={serifFont}>
              PM
              <span className="block text-[12px] text-white/65">藤野が兼任、または案件ごとに配置</span>
            </p>
          </div>
          <FlowArrow className="md:mt-3.5" />
          <div className="flex md:flex-col items-center gap-3 md:gap-2 text-center">
            <span className="flex -space-x-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#e8dfc9]/60 bg-[#123563] text-[#e8dfc9]"
                >
                  <GraduationCap size={20} strokeWidth={1.5} />
                </span>
              ))}
            </span>
            <p className="text-[14px] text-white m-0" style={serifFont}>
              北大生チーム
              <span className="block text-[12px] text-white/65">テーマに合う人を集める</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SectionLabel>ご相談の流れ</SectionLabel>
        <p className="mb-6 text-[15px] text-white/85 leading-[1.8]" style={serifFont}>
          決まったメニューはありません。まずは、お話を聞かせてください。
        </p>
        <ol className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-3 md:gap-2 list-none m-0 p-0">
          {consultingFlow.map((step, i) => (
            <li key={step.name} className="contents">
              <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3">
                <IconCircle icon={step.icon} />
                <div>
                  <p
                    className="text-[11px] tracking-[0.2em] text-[#e8dfc9] mb-1"
                    style={interFont}
                  >
                    {`STEP ${i + 1}`}
                  </p>
                  <p className="text-[16px] font-medium text-white mb-1" style={serifFont}>
                    {step.name}
                  </p>
                  <p className="text-[13px] text-white/65 m-0" style={serifFont}>
                    {step.detail}
                  </p>
                </div>
              </div>
              {i < consultingFlow.length - 1 && (
                <FlowArrow className="ml-3 md:ml-0 md:mt-3.5" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10">
        <a
          href="#contact"
          className="inline-block text-[13px] tracking-[0.2em] text-[#123563] bg-[#e8dfc9] px-6 py-3 hover:bg-white transition-colors"
          style={serifFont}
        >
          まずは相談する →
        </a>
      </div>
    </div>
  );
}

function ClientValues() {
  return (
    <div className="mt-24 md:mt-32">
      <SectionLabel>サムライウタリの強み</SectionLabel>
      <h3
        className="text-2xl md:text-[30px] font-normal text-white leading-[1.7] tracking-[0.05em] mb-10 md:mb-12"
        style={serifFont}
      >
        育てる事業を持つ、
        <br />
        コンサルティングだからできること。
      </h3>
      <ul className="grid md:grid-cols-3 gap-5 list-none m-0 p-0">
        {clientValues.map((value) => (
          <li
            key={value.name}
            className="flex flex-col items-center text-center gap-4 p-7 border border-white/[0.15] bg-white/[0.03]"
          >
            <IconCircle icon={value.icon} size="lg" />
            <p className="text-[18px] font-medium text-white leading-[1.5] m-0" style={serifFont}>
              {value.name}
            </p>
            <p className="text-[14px] text-white/70 leading-[1.8] m-0" style={serifFont}>
              {value.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Service() {
  return (
    <section
      id="service"
      className="relative py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#123563] overflow-hidden"
    >
      <div className="relative max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-white/45 mb-12 md:mb-16">
            <span className="text-white/90 font-medium" style={serifFont}>
              事業
            </span>
            <span className="text-[10px] ml-3 uppercase text-white/35">/ Service</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-12 md:mb-14 text-white tracking-[0.05em] max-w-[820px]"
            style={serifFont}
          >
            若者を育て、
            <br />
            地方の経営を<span className="text-[#e8dfc9]">前へ</span>。
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-16 md:mb-20">
            <BusinessMap />
          </div>
        </ScrollFadeIn>

        <div className="grid gap-8">
          <ScrollFadeIn>
            <EducationCard />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <ConsultingCard />
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
          <ClientValues />
        </ScrollFadeIn>
      </div>
    </section>
  );
}
