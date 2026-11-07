import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { serifFont } from "@/components/ui-parts";
import { koukokuList } from "@/data/koukoku";

export const metadata: Metadata = {
  title: "電子公告 | 株式会社サムライウタリ",
  description: "株式会社サムライウタリの電子公告を掲載しています。",
};

export default function KoukokuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf8f3]">
      <Nav />
      <section className="flex-1 pt-[140px] md:pt-[180px] pb-[90px] md:pb-[130px] px-6 md:px-[60px]">
        <div className="max-w-[800px] mx-auto" style={serifFont}>
          <h1 className="text-2xl md:text-[32px] font-normal tracking-[0.05em] text-[#123563] mb-4">電子公告</h1>
          <p className="text-[14px] leading-[1.9] text-[#1c1e2b]/80 mb-10">
            株式会社サムライウタリの公告を掲載しています。
          </p>

          {koukokuList.length === 0 ? (
            <p className="py-8 border-y border-[#123563]/15 text-[15px] text-[#1c1e2b]/80 m-0">
              現在、掲載している公告はありません。
            </p>
          ) : (
            <ul className="list-none m-0 p-0 border-t border-[#123563]/15">
              {koukokuList.map((item) => (
                <li key={item.file} className="border-b border-[#123563]/15">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row sm:gap-8 py-5 text-[#123563] hover:underline underline-offset-4"
                  >
                    <span className="text-[14px] text-[#1c1e2b]/70 shrink-0">{item.date}</span>
                    <span className="text-[15px]">{item.title}（PDF）</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
