"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serifFont = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' };

type NavChild = { jp: string; href?: string; note?: string };

const serviceChildren: NavChild[] = [
  { jp: "コンサルティング事業", href: "/consulting" },
  { jp: "人材教育事業", note: "Coming Soon" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; jp: string; en: string; children?: NavChild[] }[] = [
    { href: "/#philosophy", jp: "理念", en: "Philosophy" },
    { href: "/#mission", jp: "使命", en: "Mission" },
    { href: "/#service", jp: "事業", en: "Service", children: serviceChildren },
    { href: "/#team", jp: "UTARI", en: "Team" },
    { href: "/#contact", jp: "連絡", en: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-4 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#f6f2e7]/95 backdrop-blur-xl border-b border-[#0a2044]/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* ロゴ：シンボル + 社名 */}
        <Link href="/" className="flex items-center gap-3 md:gap-4">
          <Image
            src="/logo/primary/logo-primary.svg"
            alt="SAMURAI UTARI"
            width={52}
            height={52}
            className="w-10 h-10 md:w-12 md:h-12"
            priority
          />
          <div
            className="flex flex-col leading-tight"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            <span className="text-[11px] md:text-[13px] tracking-[0.2em] text-[#123563] font-medium">
              株式会社サムライウタリ
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#8b2500]/75 mt-0.5">
              Samurai Utari Inc.
            </span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <div key={link.href} className="relative group/item">
              <a
                href={link.href}
                aria-haspopup={link.children ? "true" : undefined}
                className="group flex flex-col items-center text-[#0a2044]/75 hover:text-[#123563] transition-colors py-1"
              >
                <span className="text-[13px] md:text-sm tracking-[0.18em]" style={serifFont}>
                  {link.jp}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#0a2044]/35 mt-0.5 group-hover:text-[#123563]/60 transition-colors">
                  {link.en}
                </span>
              </a>
              {link.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover/item:block group-focus-within/item:block">
                  <ul className="min-w-[230px] list-none m-0 p-2 bg-[#f6f2e7] border border-[#0a2044]/15 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.jp}>
                        {child.href ? (
                          <Link
                            href={child.href}
                            className="block px-3 py-2.5 text-[14px] tracking-[0.08em] whitespace-nowrap text-[#123563] hover:bg-[#123563] hover:text-white transition-colors"
                            style={serifFont}
                          >
                            {child.jp}
                          </Link>
                        ) : (
                          <span
                            className="flex items-center justify-between gap-3 px-3 py-2.5 text-[14px] tracking-[0.08em] whitespace-nowrap text-[#0a2044]/60"
                            style={serifFont}
                          >
                            {child.jp}
                            <span className="text-[11px] text-[#8b2500]">{child.note}</span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <a
            href="/consulting#contact"
            className="px-5 py-2.5 text-[13px] tracking-[0.15em] bg-[#123563] text-white hover:bg-[#1f4a86] transition-colors"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            相談する
          </a>
        </div>

        {/* Mobile：相談ボタン */}
        <a
          href="/consulting#contact"
          className="lg:hidden ml-auto mr-3 px-3 py-2 text-[12px] tracking-[0.1em] bg-[#123563] text-white whitespace-nowrap"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          相談する
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`w-6 h-px bg-[#123563] transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-[#123563] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-[#123563] transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 pb-4 flex flex-col gap-5 border-t border-[#0a2044]/10 pt-5">
          {links.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="text-[#0a2044]/80 text-base hover:text-[#123563] flex items-baseline gap-3"
                onClick={() => setMenuOpen(false)}
              >
                <span className="tracking-[0.15em]" style={serifFont}>
                  {link.jp}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#0a2044]/35">
                  {link.en}
                </span>
              </a>
              {link.children && (
                <ul className="list-none mt-3 mb-0 ml-1 pl-4 space-y-3 border-l border-[#0a2044]/20">
                  {link.children.map((child) => (
                    <li key={child.jp} className="text-[14px] tracking-[0.1em]" style={serifFont}>
                      {child.href ? (
                        <Link href={child.href} className="text-[#123563]" onClick={() => setMenuOpen(false)}>
                          {child.jp}
                        </Link>
                      ) : (
                        <span className="text-[#0a2044]/60">
                          {child.jp}
                          <span className="ml-2 text-[11px] text-[#8b2500]">{child.note}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
