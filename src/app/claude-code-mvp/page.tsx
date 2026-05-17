import type { Metadata } from 'next'
import Link from 'next/link'
import { ClaudecodeHero } from '@/components/claudecode/ClaudecodeHero'
import { CostComparison } from '@/components/claudecode/CostComparison'
import { DiagnosisTool } from '@/components/claudecode/DiagnosisTool'
import { ClaudecodeCTA } from '@/components/claudecode/ClaudecodeCTA'

export const metadata: Metadata = {
  title: '自分専用のツールを、持てる時代になった。| 株式会社サムライウタリ',
  description:
    '外注するか、SaaSで妥協するか。その二択が消えた。ClaudeCodeで、あなた専用のツールを2時間で作る。個人事業主・発信者向け自社ツール制作プログラム。',
}

const inter = { fontFamily: '"Inter", sans-serif' }

export default function ClaudeCodeMvpPage() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen">
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
      <CostComparison />
      <DiagnosisTool />
      <ClaudecodeCTA />
    </main>
  )
}
