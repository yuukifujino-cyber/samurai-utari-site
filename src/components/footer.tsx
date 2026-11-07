import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-[60px] bg-[#123563] border-t border-[#ffffff]/10">
      <div
        className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] text-white/45 tracking-[0.15em]"
        style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
      >
        <p className="m-0">© 2026 SAMURAI UTARI Inc. All rights reserved.</p>
        <Link href="/koukoku" className="hover:text-white/70 transition-colors">
          電子公告
        </Link>
      </div>
    </footer>
  );
}
