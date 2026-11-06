import { ScrollFadeIn } from "./scroll-fade-in";

type ConsultingArea = { name: string; detail: string; studentStrength?: boolean };

type ServiceItem = {
  tag: string;
  name: string;
  keyPhrase: string;
  description: string;
  comingSoon: boolean;
  areas?: ConsultingArea[];
  team?: { heading: string; text: string };
  flow?: { lead: string; steps: { name: string; detail: string }[] };
  contactLabel?: string;
};

const services: ServiceItem[] = [
  {
    tag: "Strategy × Execution",
    name: "コンサルティング事業",
    keyPhrase: "社長の右腕として、経営の困りごとを丸ごと引き受ける。",
    description:
      "地方企業の社長の隣に立つ、社外の右腕。「これは誰に相談すればいいのか」という話から受け止め、領域で線を引かず、構想から現場の実行まで伴走する。描いて終わらせず、動く仕組みと自社で回せる体制まで残す。",
    comingSoon: false,
    areas: [
      { name: "経営戦略", detail: "経営課題の論点整理、事業戦略の策定" },
      { name: "経営企画", detail: "経営会議の運営、数値管理の仕組みづくり" },
      { name: "新規事業開発", detail: "市場調査、事業構想、サービスの立ち上げ" },
      { name: "マーケティング", detail: "顧客理解、集客導線の設計と実行" },
      { name: "人事・組織構造", detail: "人事制度の設計、組織づくりと人の配置" },
      { name: "採用支援・人材育成", detail: "採用戦略の設計と実行、研修・教育制度づくり", studentStrength: true },
      { name: "AI活用・業務改革", detail: "業務の自動化、社内へのAI定着", studentStrength: true },
      { name: "プロジェクト推進", detail: "全社プロジェクトのPMO、関係者の合意形成" },
    ],
    team: {
      heading: "ここにないテーマも、チームを組んで支援します。",
      text: "上記以外の領域も、まずはご相談ください。代表の藤野が全体の責任者として課題を見立て、北大生のネットワークからテーマに合うメンバーを集めてチームを組成。リサーチから資料づくり、現場の実行まで支援します。特にAI活用と採用支援は、北大生の力が最も活きる領域です。AIを道具に現場の業務を変え、求職者に近い目線で採用の打ち手をつくります。",
    },
    flow: {
      lead: "決まったメニューから選んでいただくことはありません。まずはお話を聞かせてください。そのうえで、御社に合う進め方を考えて提案します。",
      steps: [
        { name: "ヒアリング", detail: "現状と困りごとを伺います。課題が整理できていない段階で構いません。" },
        { name: "ご提案", detail: "課題を見立て、打ち手と体制、進め方を考えてご提案します。" },
        { name: "チーム組成", detail: "藤野を責任者に、テーマに合う北大生メンバーでチームを組みます。" },
        { name: "伴走・実行", detail: "現場で一緒に動き、自社で回せる形にして引き渡します。" },
      ],
    },
    contactLabel: "まずは相談する →",
  },
  {
    tag: "Career × Education",
    name: "人材教育事業",
    keyPhrase: "次世代キャリアスクール",
    description:
      "地方大学生のための次世代キャリアスクール。経営者の視座・思考をインストールし、ビジネス戦闘力のベースをつくる。育てた若手は、コンサルティング事業のチームとして地方企業の現場で活かしていく。",
    comingSoon: true,
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

        <div className="grid gap-8">
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
                  {svc.comingSoon && (
                    <span
                      className="inline-block px-2.5 py-1 text-[10px] bg-[#4a7fc8]/20 text-[#4a7fc8] rounded-sm tracking-[0.08em] border border-[#4a7fc8]/30 whitespace-nowrap"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      Coming Soon
                    </span>
                  )}
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
                {svc.areas && (
                  <div className="mt-10">
                    <p
                      className="mb-5 text-[12px] tracking-[0.3em] text-[#4a7fc8]"
                      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                    >
                      支援領域
                    </p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.12] border border-white/[0.12] list-none m-0 p-0">
                      {svc.areas.map((area) => (
                        <li key={area.name} className="bg-[#10161f] p-5 md:p-6">
                          <p
                            className="text-[16px] font-medium text-white mb-2"
                            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                          >
                            {area.name}
                          </p>
                          {area.studentStrength && (
                            <span
                              className="inline-block mb-2 px-2 py-0.5 text-[11px] bg-[#4a7fc8]/20 text-[#9dbdeb] border border-[#4a7fc8]/40 whitespace-nowrap"
                              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                            >
                              北大生の得意領域
                            </span>
                          )}
                          <p
                            className="text-[13px] text-white/65 leading-[1.8] m-0"
                            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                          >
                            {area.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {svc.team && (
                  <div className="mt-8 p-6 md:p-8 border-l-2 border-[#4a7fc8] bg-[#4a7fc8]/[0.08]">
                    <p
                      className="text-[17px] md:text-[18px] font-medium text-white leading-[1.6] mb-3"
                      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                    >
                      {svc.team.heading}
                    </p>
                    <p
                      className="text-[14px] md:text-[15px] text-white/75 leading-[2] m-0"
                      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                    >
                      {svc.team.text}
                    </p>
                  </div>
                )}
                {svc.flow && (
                  <div className="mt-10">
                    <p
                      className="mb-3 text-[12px] tracking-[0.3em] text-[#4a7fc8]"
                      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                    >
                      ご相談の流れ
                    </p>
                    <p
                      className="mb-6 text-[14px] md:text-[15px] text-white/75 leading-[2]"
                      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                    >
                      {svc.flow.lead}
                    </p>
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
                      {svc.flow.steps.map((step, stepIndex) => (
                        <li key={step.name} className="border-t border-[#4a7fc8]/50 pt-4">
                          <p
                            className="text-[11px] tracking-[0.25em] text-[#4a7fc8] mb-2"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                          >
                            {`STEP ${stepIndex + 1}`}
                          </p>
                          <p
                            className="text-[16px] font-medium text-white mb-2"
                            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                          >
                            {step.name}
                          </p>
                          <p
                            className="text-[13px] text-white/65 leading-[1.8] m-0"
                            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                          >
                            {step.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {svc.contactLabel && (
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-block text-[12px] tracking-[0.2em] text-[#4a7fc8] border border-[#4a7fc8]/40 px-5 py-2 hover:bg-[#4a7fc8]/10 transition-colors"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {svc.contactLabel}
                    </a>
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
