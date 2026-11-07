/**
 * 電子公告の一覧。公告が出たら、この配列の先頭に1件追加する。
 *
 * - date: 公告日（例: "2027年3月31日"）
 * - title: 公告の名称（例: "第3期 決算公告"）
 * - file: PDFを public/koukoku/ に置いたときのパス（例: "/koukoku/2027-kessan.pdf"）
 */
export type Koukoku = {
  date: string;
  title: string;
  file: string;
};

export const koukokuList: Koukoku[] = [];
