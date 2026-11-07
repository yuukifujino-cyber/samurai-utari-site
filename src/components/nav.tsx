"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#philosophy", jp: "理念", en: "Philosophy" },
    { href: "#mission", jp: "使命", en: "Mission" },
    { href: "#service", jp: "事業", en: "Service" },
    { href: "#team", jp: "UTARI", en: "Team" },
    { href: "#contact", jp: "連絡", en: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#f6f2e7]/95 backdrop-blur-xl border-b border-[#0a2044]/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* ロゴ：シンボル + 社名 */}
        <a href="#" className="flex items-center gap-3 md:gap-4">
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
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center text-[#0a2044]/75 hover:text-[#123563] transition-colors py-1"
            >
              <span
                className="text-[13px] md:text-sm tracking-[0.18em]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {link.jp}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#0a2044]/35 mt-0.5 group-hover:text-[#123563]/60 transition-colors">
                {link.en}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-[13px] tracking-[0.15em] bg-[#123563] text-white hover:bg-[#1f4a86] transition-colors"
            style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
          >
            相談する
          </a>
        </div>

        {/* Mobile：相談ボタン */}
        <a
          href="#contact"
          className="md:hidden ml-auto mr-3 px-3 py-2 text-[12px] tracking-[0.1em] bg-[#123563] text-white whitespace-nowrap"
          style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
        >
          相談する
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-5 border-t border-[#0a2044]/10 pt-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0a2044]/80 text-base hover:text-[#123563] flex items-baseline gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }}
              >
                {link.jp}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#0a2044]/35">
                {link.en}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
