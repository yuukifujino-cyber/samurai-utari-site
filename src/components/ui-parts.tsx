import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export const serifFont = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' };
export const interFont = { fontFamily: '"Inter", sans-serif' };

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-5 text-[13px] tracking-[0.3em] ${dark ? "text-[#e8dfc9]" : "text-[#8b2500]"}`}
      style={serifFont}
    >
      {children}
    </p>
  );
}

export function IconCircle({
  icon: Icon,
  size = "md",
  dark = true,
}: {
  icon: LucideIcon;
  size?: "md" | "lg";
  dark?: boolean;
}) {
  const box = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const color = dark
    ? "border-[#e8dfc9]/50 bg-[#e8dfc9]/10 text-[#e8dfc9]"
    : "border-[#123563]/40 bg-[#123563]/[0.06] text-[#123563]";
  return (
    <span className={`inline-flex items-center justify-center ${box} rounded-full border ${color} shrink-0`}>
      <Icon size={size === "lg" ? 28 : 22} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}

/** 横並びのときは右、縦並びのときは下を指す矢印 */
export function FlowArrow({ className = "", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <span className={`${dark ? "text-[#e8dfc9]" : "text-[#123563]"} ${className}`} aria-hidden="true">
      <ArrowRight size={20} className="hidden md:block" />
      <ArrowDown size={20} className="md:hidden" />
    </span>
  );
}
