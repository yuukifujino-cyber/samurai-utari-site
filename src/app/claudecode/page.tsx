import type { Metadata } from 'next'
import Link from 'next/link'
import { ClaudecodeHero } from '@/components/claudecode/ClaudecodeHero'

export const metadata: Metadata = {
  title: '開発するかどうかの判断基準が、変わった。| 株式会社サムライウタリ',
  description:
    'あなたのIPで作れるMVPを2時間で。ClaudeCodeで、コーディング工数がゼロになった時代の開発体験。年収3000万クラスの個人事業主・発信者向けプログラム。',
}

const inter = { fontFamily: '"Inter", sans-serif' }

export default function ClaudecodePage() {
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

      <ClaudecodeHero />

      {/* 後続セクション（Task 4, 5, 6 で追加） */}
    </main>
  )
}
