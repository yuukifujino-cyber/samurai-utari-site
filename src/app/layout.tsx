import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "株式会社サムライウタリ | SAMURAI UTARI Inc.",
  description:
    "夢なき者に理想を。地方に、革命を。コンサルティング事業・人材教育事業を展開する株式会社サムライウタリのコーポレートサイト。",
  openGraph: {
    title: "株式会社サムライウタリ | SAMURAI UTARI Inc.",
    description: "夢なき者に、理想を。地方に、革命を。",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
  },
  themeColor: "#123563",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
