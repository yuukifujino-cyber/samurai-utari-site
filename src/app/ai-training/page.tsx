import type { Metadata } from "next";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/scroll-fade-in";
import { FormrunEmbed } from "@/components/formrun-embed";

export const metadata: Metadata = {
  title: "生成AI研修 パイロット募集 | 株式会社サムライウタリ",
  description:
    "AIを導入したのに現場が変わらない。その本当の理由と解決策を、自社で実装した経営者が公開します。初回パイロット3社限定。北海道・関西・九州で対面提供。",
};

const FORM_ID = "@samurai-utari-2Ti4N0pylJFYS0HR0qyi";

function CTAButton({ label = "話を聞いてみる" }: { label?: string }) {
  return (
    <a
      href="#contact"
      className="inline-block px-10 py-4 bg-[#4a7fc8] text-white text-sm tracking-[0.15em] hover:bg-[#3a6ab8] transition-all"
      style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
    >
      {label}
    </a>
  );
}

const targetList = [
  "ChatGPTを導入したが、3か月後に誰も使っていなかった",
  "AI研修を受けさせたが、業務が何も変わらなかった",
  "「うちの業務にどう使えばいいか」が分からないまま止まっている",
  "東京の研修会社に任せるのは遠くて不安、対面で伴走してほしい",
];

const curriculum = [
  { session: "01", title: "DX概論 / 業務整理（中分類）", desc: "DXの6ステップと生成AI概要。WS：自社業務を大分類・中分類で棚卸し。成果物：業務一覧表（中分類）。" },
  { session: "02", title: "業務整理（小分類）/ 工数集計", desc: "小分類化の観点と工数集計手法。WS：小分類棚卸と工数集計。成果物：業務一覧表＋工数集計表。" },
  { session: "03", title: "業務フロー作成", desc: "フロー図作成ルール（記号・接続方法）。WS：対象業務のフロー作成。成果物：業務フロー図。" },
  { session: "04", title: "課題抽出 / AI活用可能性評価", desc: "課題抽出の観点（工数・品質・顧客満足）とAI適合性の評価軸。成果物：課題一覧表（AI適合性評価付き）。" },
  { session: "05", title: "生成AIプロンプト設計", desc: "業務文脈を伝える3層構造プロンプト設計。WS：自社業務へのプロンプト適用。成果物：業務別プロンプトテンプレート集。" },
  { session: "06", title: "業務効率化の実装実践", desc: "資料・議事録・メール・報告書へのClaude適用。WS：実業務をClaudeで処理。成果物：業務効率化記録（before/after）。" },
  { session: "07", title: "AI業務改善ロードマップ策定", desc: "改善打ち手の優先順位付けとアクションプラン設計。WS：自社3か月ロードマップ作成。成果物：AIロードマップ。" },
  { session: "08", title: "最終レポート / 実装計画発表", desc: "WS：最終レポート＋実装計画作成。成果発表と講師総評。成果物：最終レポート（業務整理〜AI活用計画）。" },
];

const costs = [
  { label: "受講料（1名）", value: "¥363,000", note: "税込", highlight: false, accent: false },
  { label: "助成金補助（最大75%）", value: "▲¥272,250", note: "人材開発支援助成金", highlight: false, accent: true },
  { label: "実質負担額", value: "¥90,750", note: "1名あたり約¥8万円〜", highlight: true, accent: false },
];

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' };
const inter = { fontFamily: '"Inter", sans-serif' };

function SectionLabel({ ja, en }: { ja: string; en: string }) {
  return (
    <p className="text-[13px] tracking-[0.4em] text-white/45 mb-12">
      <span className="text-white/90 font-medium" style={serif}>{ja}</span>
      <span className="text-[10px] ml-3 uppercase text-white/35">/ {en}</span>
    </p>
  );
}

export default function AiTrainingPage() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen">

      {/* 戻るリンク */}
      <div className="px-6 md:px-[60px] py-6">
        <Link
          href="/"
          className="text-[12px] tracking-[0.3em] text-white/40 hover:text-white/70 transition-colors uppercase"
          style={inter}
        >
          ← SAMURAI UTARI
        </Link>
      </div>

      {/* Hero - 問題認識から始める */}
      <section className="relative px-6 md:px-[60px] pt-[80px] pb-[140px] md:pt-[100px] md:pb-[180px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(74,127,200,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,127,200,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(74,127,200,0.12),transparent)] rounded-full pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <p className="text-[11px] tracking-[0.4em] text-white/40 mb-10 uppercase" style={inter}>
              AI × Reskilling / 生成AI研修事業
            </p>
            <h1
              className="text-[28px] md:text-[46px] font-normal leading-[1.7] mb-10 tracking-[0.03em]"
              style={serif}
            >
              AIを「導入した」のに、<br />
              現場が<span className="text-[#4a7fc8]">何も変わっていない</span>。<br />
              その本当の理由が、<br className="md:hidden" />分かりますか。
            </h1>
            <p
              className="text-[14px] md:text-[16px] text-white/60 leading-[2.2] mb-14 max-w-[600px]"
              style={serif}
            >
              問題はスキル不足ではない。
              「自社の具体的な業務にどう落とし込むか」を教えない研修が、ほとんどだからだ。
              <br /><br />
              このページは、自社でClaude実装を試みた経営者が、
              その方法論を初めて外部に公開するプログラムの案内です。
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <CTAButton label="まず話を聞いてみる" />
              <p className="text-[12px] text-white/35" style={serif}>
                ※ 現在パイロット3社限定で募集中
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 洞察 - なぜAI研修は失敗するか */}
      <section className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-[#0a0e14]">
        <div className="max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="なぜ失敗するか" en="The Real Problem" />
            <h2
              className="text-2xl md:text-[34px] font-normal leading-[1.8] mb-10 text-white tracking-[0.03em] max-w-[760px]"
              style={serif}
            >
              研修を受けても業務が変わらない会社には、<br />
              <span className="text-[#4a7fc8]">共通した構造的な理由</span>がある。
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/[0.03] border border-white/[0.08]">
                <p className="text-[11px] tracking-[0.3em] text-white/30 mb-5 uppercase" style={inter}>よくある研修</p>
                <ul className="space-y-4">
                  {[
                    "「AIで何ができるか」を教える",
                    "汎用的なプロンプト例を紹介する",
                    "受講後は各自で試してもらう",
                    "研修後のフォローはなし",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[14px] text-white/45 leading-[1.8]" style={serif}>
                      <span className="text-white/20 shrink-0">—</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white/[0.03] border border-[#4a7fc8]/30">
                <p className="text-[11px] tracking-[0.3em] text-[#4a7fc8]/60 mb-5 uppercase" style={inter}>このプログラム</p>
                <ul className="space-y-4">
                  {[
                    "「自社の○○業務をどう変えるか」を設計する",
                    "受講者自身の業務に合わせてプロンプトを作る",
                    "実装まで伴走し、3週間後にレビューする",
                    "経営者が自ら実装した生事例をすべて公開する",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[14px] text-white/80 leading-[1.8]" style={serif}>
                      <span className="text-[#4a7fc8] shrink-0">→</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* こんな会社に向けて書いています */}
      <section className="px-6 md:px-[60px] py-[120px] md:py-[160px]">
        <div className="max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="対象" en="For You If" />
            <h2
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-14 text-white tracking-[0.03em]"
              style={serif}
            >
              こういう状態の経営者に、<br />
              読んでほしいと思っています。
            </h2>
          </ScrollFadeIn>
          <div className="space-y-4">
            {targetList.map((item, i) => (
              <ScrollFadeIn key={i}>
                <div className="flex gap-5 p-6 bg-white/[0.03] border border-white/[0.07]">
                  <span className="text-[#4a7fc8]/50 text-[13px] shrink-0 mt-0.5" style={inter}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] text-white/80 leading-[1.8]" style={serif}>{item}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <ScrollFadeIn>
            <p className="text-[13px] text-white/35 mt-8 leading-[2]" style={serif}>
              逆に、すでにAI活用が社内で定着している企業、
              エンジニア主導でシステム開発をしたい企業には向きません。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* パイロット限定募集 - 正直に逆手に取る */}
      <section className="relative px-6 md:px-[60px] py-[120px] md:py-[160px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(74,127,200,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,127,200,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="パイロット募集" en="Pilot Program" />
            <div className="inline-block px-4 py-1.5 border border-[#4a7fc8]/50 text-[#4a7fc8] text-[11px] tracking-[0.2em] mb-10" style={inter}>
              残り 3社 限定
            </div>
            <h2
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-10 text-white tracking-[0.03em]"
              style={serif}
            >
              正直に言います。<br />
              このプログラムは、<span className="text-[#4a7fc8]">まだ他社への実績がありません</span>。
            </h2>
            <div className="p-10 bg-white/[0.03] border border-white/[0.10] max-w-[720px]">
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[2.2] mb-8" style={serif}>
                自社での実装実績はあります。ただ、他の会社に提供するのはこれが初めてです。
                だから最初の3社には、通常より低い投資でご参加いただく代わりに、
                率直なフィードバックをいただきたいと考えています。
              </p>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[2.2]" style={serif}>
                「まだ実績がない業者に頼むのはリスクがある」という感覚は正しい。
                だからこそ、ヒアリングで合わないと判断した場合は、
                費用は一切発生しません。まず話だけ聞いていただければ十分です。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="mt-12">
              <CTAButton label="まず話を聞いてみる（無料）" />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* プログラム概要 */}
      <section className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-[#0a0e14]">
        <div className="max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="プログラム" en="Curriculum" />
            <h2
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-4 text-white tracking-[0.03em]"
              style={serif}
            >
              16時間・全8回の<span className="text-[#4a7fc8]">実装型</span>プログラム
            </h2>
            <p className="text-[14px] text-white/50 mb-14" style={serif}>
              2時間 × 8セッション。スキル習得で終わらず、自社業務への実装まで完走する設計。
            </p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {curriculum.map((c) => (
              <ScrollFadeIn key={c.session}>
                <div className="flex gap-6 p-6 bg-white/[0.03] border border-white/[0.06] hover:border-[#4a7fc8]/40 transition-colors">
                  <span className="text-[11px] tracking-[0.2em] text-[#4a7fc8]/50 shrink-0 mt-1" style={inter}>
                    {c.session}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1" style={serif}>{c.title}</p>
                    <p className="text-[13px] text-white/50" style={serif}>{c.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 補助金 */}
      <section className="px-6 md:px-[60px] py-[120px] md:py-[160px]">
        <div className="max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="費用" en="Investment" />
            <h2
              className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-4 text-white tracking-[0.03em]"
              style={serif}
            >
              補助金を使えば、<br />
              <span className="text-[#4a7fc8]">¥36万円の研修が実質¥8万円</span>になる。
            </h2>
            <p className="text-[14px] text-white/50 mb-14" style={serif}>
              人材開発支援助成金（事業展開等リスキリング支援コース）は、研修費用の最大75%を国が負担します。
              申請は提携社労士が対応するため、経営者の手間はほぼかかりません。
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {costs.map((item) => (
                <div
                  key={item.label}
                  className={`p-8 border ${
                    item.highlight
                      ? "border-[#4a7fc8]/60 bg-[#4a7fc8]/10"
                      : "border-white/[0.08] bg-white/[0.03]"
                  }`}
                >
                  <p className="text-[12px] tracking-[0.15em] text-white/40 mb-3" style={inter}>
                    {item.label}
                  </p>
                  <p
                    className={`text-[26px] font-light mb-1 ${
                      item.accent ? "text-[#4a7fc8]" : item.highlight ? "text-white" : "text-white/80"
                    }`}
                    style={inter}
                  >
                    {item.value}
                  </p>
                  <p className="text-[12px] text-white/35" style={serif}>{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-white/30 leading-[2]" style={serif}>
              ※ 人材開発支援助成金（事業展開等リスキリング支援コース）適用時。補助率は企業規模により異なります。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 講師 - 洞察の深さで権威を出す */}
      <section className="px-6 md:px-[60px] py-[120px] md:py-[160px] bg-[#0a0e14]">
        <div className="max-w-[900px] mx-auto">
          <ScrollFadeIn>
            <SectionLabel ja="なぜ僕が教えるか" en="Why Me" />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="p-10 md:p-14 bg-white/[0.03] border border-white/[0.08]">
              <p className="text-[11px] tracking-[0.3em] text-[#4a7fc8]/60 mb-4" style={inter}>INSTRUCTOR</p>
              <h3 className="text-[26px] md:text-[32px] font-normal text-white mb-2" style={serif}>
                藤野 悠生
              </h3>
              <p className="text-[13px] text-[#4a7fc8] mb-10 tracking-[0.05em]" style={serif}>
                株式会社サムライウタリ 代表取締役
              </p>
              <div className="space-y-6">
                <p className="text-[15px] md:text-[16px] text-white/75 leading-[2.2]" style={serif}>
                  SES人材紹介・経営コンサル・AI実装支援の三事業を経営しながら、
                  自社業務へのClaude活用を1年以上実践してきた。
                  エンジニアではない。プログラムも書けない。
                  それでも、4時間かかっていた業務を10分に変えた。
                </p>
                <p className="text-[15px] md:text-[16px] text-white/75 leading-[2.2]" style={serif}>
                  専門家が「AIの可能性」を語る研修には飽きている。
                  僕が提供するのは「自社で実際に使っている人間が、どう考え、どう実装したか」の話だ。
                  それは教科書には書いていない。
                </p>
                <p className="text-[15px] md:text-[16px] text-white/75 leading-[2.2]" style={serif}>
                  だからこのプログラムは、AIの知識を教えるより先に、
                  「あなたの会社の○○業務をどう変えるか」を一緒に考えることから始める。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA + 埋め込みフォーム */}
      <section id="contact" className="px-6 md:px-[60px] py-[120px] md:py-[180px] bg-[#123563]">
        <div className="max-w-[720px] mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <p className="text-[13px] tracking-[0.4em] text-white/50 mb-12">
                <span className="text-white/90 font-medium" style={serif}>パイロット募集</span>
                <span className="text-[10px] ml-3 uppercase text-white/35">/ 3社限定</span>
              </p>
              <h2
                className="text-2xl md:text-[38px] font-normal tracking-[0.05em] mb-6 text-white leading-[1.7]"
                style={serif}
              >
                まず話を聞くだけで構いません。<br />
                売り込みはしません。
              </h2>
              <p
                className="text-sm md:text-[15px] text-white/60 leading-[2.2] max-w-[520px] mx-auto"
                style={serif}
              >
                30分のヒアリングで、このプログラムが御社に合うかどうかを正直にお伝えします。
                合わないと判断した場合、費用は一切発生しません。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-sm p-2">
              <FormrunEmbed formId={FORM_ID} />
            </div>
          </ScrollFadeIn>
        </div>
      </section>


    </main>
  );
}
