import type { DiagnosisResult as ResultType } from '@/types/diagnosis'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

const MVP_TYPE_LABELS: Record<string, string> = {
  A: 'AI診断ツール',
  B: 'AIチャットBot',
  C: '自動レポート生成',
  D: 'LP＋フォーム',
}

interface Props {
  result: ResultType
}

export function DiagnosisResult({ result }: Props) {
  return (
    <div className="bg-white/[0.03] border border-[#4a7fc8]/40 p-8 mt-10">
      <p className="text-[11px] tracking-[0.3em] text-[#4a7fc8]/60 mb-4 uppercase" style={inter}>
        あなたのMVP診断結果
      </p>
      <h3 className="text-[22px] md:text-[28px] font-normal text-white mb-2 leading-[1.5]" style={serif}>
        {result.mvpName}
      </h3>
      <p className="text-[14px] text-white/60 mb-2 leading-[1.8]" style={serif}>
        {result.mvpDescription}
      </p>
      <p className="text-[11px] text-white/30 mb-8" style={inter}>
        推奨型：{MVP_TYPE_LABELS[result.mvpType] ?? result.mvpType}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-5 bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[11px] tracking-[0.2em] text-white/30 mb-3 uppercase" style={inter}>従来の外注</p>
          <p className="text-[22px] text-white/50 font-light mb-1" style={inter}>{result.traditionalCost}</p>
          <p className="text-[13px] text-white/30" style={serif}>{result.traditionalDuration}</p>
        </div>
        <div className="p-5 bg-[#4a7fc8]/10 border border-[#4a7fc8]/40">
          <p className="text-[11px] tracking-[0.2em] text-[#4a7fc8]/60 mb-3 uppercase" style={inter}>ClaudeCode</p>
          <p className="text-[22px] text-white font-light mb-1" style={inter}>月2万円</p>
          <p className="text-[13px] text-[#4a7fc8]/70" style={serif}>2時間</p>
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-6 space-y-5 mb-8">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-white/30 mb-2 uppercase" style={inter}>完成後のインパクト</p>
          <p className="text-[14px] text-white/70 leading-[1.8]" style={serif}>{result.expectedImpact}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-white/30 mb-2 uppercase" style={inter}>セッションで最初に作るもの</p>
          <p className="text-[14px] text-white/70 leading-[1.8]" style={serif}>{result.nextAction}</p>
        </div>
      </div>

      <div className="p-5 bg-white/[0.03] border border-white/[0.06] mb-8">
        <p className="text-[13px] text-white/40 leading-[1.8]" style={serif}>
          セキュリティと公開の判断は、プロダクトごとに顧問と確認しながら進めます。
          これが顧問の最初の仕事です。
        </p>
      </div>

      <a
        href="#cta"
        className="block w-full text-center px-8 py-4 bg-[#4a7fc8] text-white text-sm tracking-[0.15em] hover:bg-[#3a6ab8] transition-all"
        style={serif}
      >
        この{result.mvpName}を作るセッションに申し込む
      </a>
    </div>
  )
}
