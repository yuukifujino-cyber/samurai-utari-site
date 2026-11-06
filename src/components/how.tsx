import { ScrollFadeIn } from "./scroll-fade-in";

const pillars = [
  {
    num: "01",
    kanji: "育てる",
    en: "Cultivate",
    text: "地方国公立大生に、実学のビジネススクールを届ける。経営者の視座・思考を身につけ、入社1年目から経営層と会話できる人材を育てる。",
  },
  {
    num: "02",
    kanji: "つなぐ",
    en: "Connect",
    text: "育った若手と、地方企業の経営課題をつなぐ。案件ごとにチームを組み、学びを現場の実行へ変えていく。",
  },
  {
    num: "03",
    kanji: "変える",
    en: "Change",
    text: "社長の右腕として、経営の困りごとに伴走する。構想から実行まで支え、自社で回せる体制を残して、地方企業を前へ進める。",
  },
];

export function How() {
  return (
    <section id="how" className="py-[160px] md:py-[220px] px-6 md:px-[60px] bg-[#faf8f3]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-[0.4em] text-[#1c1e2b]/45 mb-12 md:mb-16">
            <span
              className="text-[#123563] font-medium"
              style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
            >
              どのように
            </span>
            <span className="text-[10px] ml-3 uppercase text-[#1c1e2b]/30">/ How</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h2
            className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-20 md:mb-28 text-[#123563] tracking-[0.05em] max-w-[820px]"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            「育てる・つなぐ・変える」の三軸で、
            <br />
            地方と都市の格差を、行動で埋める。
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((p, i) => (
            <ScrollFadeIn key={i}>
              <div className="border-t border-[#1c1e2b]/15 pt-8">
                <p
                  className="text-xs tracking-[0.3em] text-[#4a7fc8] mb-6"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {p.num}
                </p>
                <h3
                  className="text-2xl md:text-[28px] font-medium mb-2 text-[#123563] tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {p.kanji}
                </h3>
                <p
                  className="text-[11px] tracking-[0.25em] uppercase text-[#1c1e2b]/40 mb-8"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {p.en}
                </p>
                <p
                  className="text-[14px] text-[#1c1e2b]/75 leading-[2.1]"
                  style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
                >
                  {p.text}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
