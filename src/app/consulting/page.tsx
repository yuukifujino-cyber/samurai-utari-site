import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { ConsultingLp } from "@/components/consulting-lp";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "コンサルティング事業 | 株式会社サムライウタリ",
  description:
    "100億宣言を、実行に変える。社長の右腕と地方国公立大の学生チームが、宣言に書いた課題の実行まで伴走する経営支援サービスです。",
};

export default function ConsultingPage() {
  return (
    <main>
      <Nav />
      <ConsultingLp />
      <Contact />
      <Footer />
    </main>
  );
}
