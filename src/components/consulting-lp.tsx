import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  ChartColumn,
  ClipboardList,
  GraduationCap,
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
  UserRoundX,
  Users,
  Workflow,
} from "lucide-react";
import { ScrollFadeIn } from "./scroll-fade-in";
import { FlowArrow, IconCircle, SectionLabel, interFont, serifFont } from "./ui-parts";

type IconText = { icon: LucideIcon; name: string; detail: string };

const walls: IconText[] = [
  { icon: Lightbulb, name: "構想が社長の頭の中で止まる", detail: "動かす人が社内にいない" },
  { icon: UserRoundX, name: "経営企画を任せる人がいない", detail: "専任を置く余裕もない" },
  { icon: UserRoundSearch, name: "若手が採れない、定着しない", detail: "成長の担い手が足りない" },
  { icon: Bot, name: "AIを入れても現場で使われない", detail: "導入で止まっている" },
];

const roles: IconText[] = [
  { icon: UserRound, name: "パートナー 藤野", detail: "論点と優先順位を決める責任者" },
  { icon: ClipboardList, name: "PM", detail: "藤野が兼任、または案件ごとに配置" },
  { icon: GraduationCap, name: "北大生チーム", detail: "調査・資料・実務を動かす" },
];

const examples = [
  { issue: "管理部門を効率化したい", action: "月次集計と会議資料をAIで自動化", result: "毎月自動で回る仕組み" },
  { issue: "新しい人事制度を定着させたい", action: "説明資料づくりと現場の運用を支援", result: "現場で回る運用ルール" },
  { issue: "若手を採用したい", action: "学生の目線で採用の打ち手を設計・実行", result: "自社で回せる採用の型" },
  { issue: "新規事業を立ち上げたい", action: "市場調査と事業の検証を実行", result: "進めるか判断できる材料" },
];

const areas: { icon: LucideIcon; name: string; studentStrength?: boolean }[] = [
  { icon: Target, name: "経営戦略" },
  { icon: ChartColumn, name: "経営企画" },
  { icon: Lightbulb, name: "新規事業開発" },
  { icon: Megaphone, name: "マーケティング" },
  { icon: Network, name: "人事・組織構造" },
  { icon: UserRoundSearch, name: "採用支援・人材育成", studentStrength: true },
  { icon: Bot, name: "AI活用・業務改革", studentStrength: true },
  { icon: ListChecks, name: "プロジェクト推進" },
];

const values: IconText[] = [
  { icon: UserRoundCheck, name: "合う人を見極める", detail: "経歴書だけでなく、実力と人柄で選ぶ" },
  { icon: BadgeCheck, name: "実行の手まで揃う", detail: "提案で終わらず、現場の実務まで" },
  { icon: Sprout, name: "若い世代との縁が残る", detail: "若者の目線と接点が、社内に残る" },
];

const flow: IconText[] = [
  { icon: MessageCircle, name: "ヒアリング", detail: "宣言の課題から伺う" },
  { icon: ClipboardList, name: "ご提案", detail: "御社に合う形を考える" },
  { icon: Users, name: "チーム組成", detail: "最適な体制を組む" },
  { icon: Workflow, name: "伴走・実行", detail: "自社で回せる形に" },
];

const faqs = [
  {
    q: "学生に経営の仕事を任せて大丈夫ですか？",
    a: "経営の判断は責任者が担います。学生は責任者の指示のもとで、調査や資料づくりなどの実務を担当します。",
  },
  {
    q: "機密情報の扱いはどうなりますか？",
    a: "学生を含む関係者と秘密保持契約を結び、扱う情報を必要な範囲に絞ります。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "内容と体制によって異なるため、ヒアリングのうえでご提案します。",
  },
];

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-[32px] font-normal leading-[1.6] tracking-[0.04em] mb-10 md:mb-14 text-[#123563]"
      style={serifFont}
    >
      {children}
    </h2>
  );
}

function LpHero() {
  return (
    <section className="pt-[150px] md:pt-[200px] pb-[90px] md:pb-[130px] px-6 md:px-[60px] bg-[#123563] text-center">
      <div className="max-w-[900px] mx-auto">
        <p className="mb-6 text-[13px] tracking-[0.3em] text-[#e8dfc9]" style={serifFont}>
          コンサルティング事業
        </p>
        <h1
          className="text-[34px] md:text-[60px] font-normal leading-[1.5] tracking-[0.06em] text-white mb-7"
          style={serifFont}
        >
          100億宣言を、
          <br className="md:hidden" />
          実行に変える。
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[1.9] text-white/90 mb-10" style={serifFont}>
          社長の右腕と地方国公立大の学生チームが、
          <br className="hidden md:block" />
          宣言に書いた課題の実行まで伴走します。
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 text-[14px] tracking-[0.15em] bg-[#e8dfc9] text-[#123563] hover:bg-white transition-colors"
          style={serifFont}
        >
          まずは話を聞く
        </a>
      </div>
    </section>
  );
}

function Walls() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>課題</SectionLabel>
          <Heading>宣言の次に、こんな壁はありませんか。</Heading>
          <ul className="grid sm:grid-cols-2 gap-x-10 list-none m-0 p-0 border-t border-[#123563]/15">
            {walls.map((wall) => (
              <li key={wall.name} className="flex items-center gap-5 py-6 border-b border-[#123563]/15">
                <IconCircle icon={wall.icon} dark={false} />
                <div>
                  <p className="text-[17px] font-medium text-[#123563] leading-[1.5] mb-1" style={serifFont}>
                    {wall.name}
                  </p>
                  <p className="text-[14px] text-[#1c1e2b]/75 m-0" style={serifFont}>
                    {wall.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function TeamStructure() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>体制</SectionLabel>
          <Heading>足りない実行力を、チームで補います。</Heading>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-3">
            {roles.map((role, i) => (
              <div key={role.name} className="contents">
                <div className="flex-1 flex flex-col items-center text-center gap-3">
                  <IconCircle icon={role.icon} size="lg" dark={false} />
                  <p className="text-[17px] font-medium text-[#123563] m-0" style={serifFont}>
                    {role.name}
                  </p>
                  <p className="text-[14px] leading-[1.7] text-[#1c1e2b]/75 m-0" style={serifFont}>
                    {role.detail}
                  </p>
                </div>
                {i < roles.length - 1 && <FlowArrow dark={false} className="md:mt-5" />}
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function Examples() {
  const headers = ["宣言に書かれる課題", "私たちが動くこと", "御社に残るもの"];
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-[#123563]">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel dark>支援イメージ</SectionLabel>
          <h2
            className="text-2xl md:text-[32px] font-normal leading-[1.6] tracking-[0.04em] mb-10 md:mb-14 text-white"
            style={serifFont}
          >
            たとえば、こんな支援です。
          </h2>
          <div className="hidden md:grid grid-cols-[1fr_24px_1fr_24px_1fr] gap-4 pb-3 border-b border-white/30">
            {headers.map((header, i) => (
              <p
                key={header}
                className="text-[13px] tracking-[0.1em] text-[#e8dfc9] m-0"
                style={{ ...serifFont, gridColumn: i * 2 + 1 }}
              >
                {header}
              </p>
            ))}
          </div>
          <ul className="list-none m-0 p-0">
            {examples.map((example) => (
              <li
                key={example.issue}
                className="grid md:grid-cols-[1fr_24px_1fr_24px_1fr] items-center gap-2 md:gap-4 py-6 border-b border-white/20"
              >
                <p className="text-[16px] font-medium text-white m-0" style={serifFont}>
                  {example.issue}
                </p>
                <ArrowRight size={18} className="hidden md:block text-[#e8dfc9]" aria-hidden="true" />
                <p className="text-[15px] text-white/85 m-0" style={serifFont}>
                  {example.action}
                </p>
                <ArrowRight size={18} className="hidden md:block text-[#e8dfc9]" aria-hidden="true" />
                <p className="text-[15px] font-medium text-[#e8dfc9] m-0" style={serifFont}>
                  {example.result}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13px] text-white/70" style={serifFont}>
            ※ 支援内容の例です。実際の内容は、ヒアリングのうえで設計します。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>支援領域</SectionLabel>
          <Heading>経営の困りごとを、丸ごと引き受けます。</Heading>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#123563]/15 border border-[#123563]/15 list-none m-0 p-0">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <li
                  key={area.name}
                  className={`relative flex flex-col items-center justify-center gap-3 p-2 md:p-5 min-h-[120px] text-center ${
                    area.studentStrength ? "bg-[#123563] text-white" : "bg-[#faf8f3] text-[#123563]"
                  }`}
                >
                  {area.studentStrength && (
                    <Star
                      size={14}
                      className="absolute top-2.5 right-2.5 text-[#e8dfc9] fill-[#e8dfc9]"
                      aria-hidden="true"
                    />
                  )}
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  <p className="text-[13px] md:text-[15px] font-medium leading-[1.5] m-0" style={serifFont}>
                    {area.name}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="flex items-center gap-2 mt-4 text-[14px] text-[#1c1e2b]/75" style={serifFont}>
            <Star size={14} className="text-[#123563] fill-[#123563] shrink-0" aria-hidden="true" />
            北大生チームが特に得意とする領域
          </p>
          <p className="mt-2 text-[14px] md:text-[15px] text-[#123563]" style={serifFont}>
            ここにないテーマも、チームを組んで支援します。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>選ばれる理由</SectionLabel>
          <Heading>
            育てる事業を持つ、
            <br />
            コンサルティングだからできること。
          </Heading>
          <ul className="grid md:grid-cols-3 gap-10 list-none m-0 p-0">
            {values.map((value) => (
              <li key={value.name} className="flex flex-col items-center text-center gap-3">
                <IconCircle icon={value.icon} size="lg" dark={false} />
                <p className="text-[18px] font-medium text-[#123563] m-0" style={serifFont}>
                  {value.name}
                </p>
                <p className="text-[14px] leading-[1.8] text-[#1c1e2b]/75 m-0" style={serifFont}>
                  {value.detail}
                </p>
              </li>
            ))}
          </ul>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function Flow() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1000px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>ご相談の流れ</SectionLabel>
          <Heading>決まったメニューはありません。まずは、お話を聞かせてください。</Heading>
          <ol className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-3 md:gap-2 list-none m-0 p-0">
            {flow.map((step, i) => (
              <li key={step.name} className="contents">
                <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3">
                  <IconCircle icon={step.icon} dark={false} />
                  <div>
                    <p className="text-[12px] tracking-[0.2em] text-[#8b2500] mb-1" style={interFont}>
                      {`STEP ${i + 1}`}
                    </p>
                    <p className="text-[16px] font-medium text-[#123563] mb-1" style={serifFont}>
                      {step.name}
                    </p>
                    <p className="text-[14px] text-[#1c1e2b]/75 m-0" style={serifFont}>
                      {step.detail}
                    </p>
                  </div>
                </div>
                {i < flow.length - 1 && <FlowArrow dark={false} className="ml-3 md:ml-0 md:mt-3.5" />}
              </li>
            ))}
          </ol>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-[90px] md:py-[130px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[800px] mx-auto">
        <ScrollFadeIn>
          <SectionLabel>よくあるご質問</SectionLabel>
          <dl className="m-0 border-t border-[#123563]/15">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6 border-b border-[#123563]/15">
                <dt className="text-[16px] font-medium text-[#123563] mb-2" style={serifFont}>
                  {faq.q}
                </dt>
                <dd className="m-0 text-[14px] leading-[1.9] text-[#1c1e2b]/80" style={serifFont}>
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[12px] leading-[1.8] text-[#1c1e2b]/70" style={serifFont}>
            「100億宣言」は中小企業庁・中小企業基盤整備機構の制度です。当社は同制度の運営主体ではありません。
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

export function ConsultingLp() {
  return (
    <>
      <LpHero />
      <Walls />
      <TeamStructure />
      <Examples />
      <Areas />
      <Values />
      <Flow />
      <Faq />
    </>
  );
}
