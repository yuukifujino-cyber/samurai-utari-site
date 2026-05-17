'use client'

import { useState } from 'react'
import type { DiagnosisInput, DiagnosisResult as ResultType } from '@/types/diagnosis'
import { DiagnosisResult } from './DiagnosisResult'

const serif = { fontFamily: 'var(--font-noto-serif), "Noto Serif JP", serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

const REVENUE_MODELS = [
  'YouTube・SNS発信',
  'コーチング・セミナー',
  '顧問・コンサル',
  '書籍・情報コンテンツ',
  'その他',
]

const SCALE_BARRIERS = [
  '時間が足りない',
  'ちょうどいいツールがない',
  '技術がわからない',
  '人材がいない',
]

function SectionLabel({ ja, en }: { ja: string; en: string }) {
  return (
    <p className="text-[13px] tracking-[0.4em] text-white/45 mb-12">
      <span className="text-white/90 font-medium" style={serif}>{ja}</span>
      <span className="text-[10px] ml-3 uppercase text-white/35">/ {en}</span>
    </p>
  )
}

export function DiagnosisTool() {
  const [form, setForm] = useState<DiagnosisInput>({
    job: '',
    ip: '',
    revenueModel: '',
    developmentIdea: '',
    scaleBarrier: '',
  })
  const [result, setResult] = useState<ResultType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const errData = await res.json().catch(() => null)
        throw new Error(errData?.error ?? '診断に失敗しました')
      }
      const data: ResultType = await res.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '診断中にエラーが発生しました。もう一度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  const isSubmittable =
    form.job.trim() !== '' &&
    form.ip.trim() !== '' &&
    form.revenueModel !== '' &&
    form.developmentIdea.trim() !== '' &&
    form.scaleBarrier !== ''

  return (
    <section id="diagnosis" className="px-6 md:px-[60px] py-[120px] md:py-[160px]">
      <div className="max-w-[720px] mx-auto">
        <SectionLabel ja="自社ツール診断" en="Tool Diagnosis" />
        <h2
          className="text-2xl md:text-[34px] font-normal leading-[1.7] mb-4 text-white tracking-[0.03em]"
          style={serif}
        >
          あなたのビジネスに<br className="hidden md:block" />
          <span className="text-[#4a7fc8]">持てるツールを、診断する</span>
        </h2>
        <p className="text-[14px] text-white/50 mb-14 leading-[2]" style={serif}>
          5つの質問に答えるだけ。あなたのビジネスに合った自社ツールを提案します。
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label htmlFor="field-job" className="block text-[13px] tracking-[0.2em] text-white/50 mb-4 uppercase" style={inter}>
              Q1. あなたの専門領域・職業は？
            </label>
            <input
              id="field-job"
              type="text"
              placeholder="例：税理士YouTuber、ビジネスコーチ、マーケコンサルタント"
              value={form.job}
              onChange={(e) => setForm({ ...form, job: e.target.value })}
              required
              className="w-full bg-white/[0.03] border border-white/[0.10] px-5 py-4 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#4a7fc8]/50 transition-colors"
              style={serif}
            />
          </div>

          <div>
            <label htmlFor="field-ip" className="block text-[13px] tracking-[0.2em] text-white/50 mb-4 uppercase" style={inter}>
              Q2. よく相談されること・得意なことは？
            </label>
            <input
              id="field-ip"
              type="text"
              placeholder="例：節税の相談、メンタルコーチング、マーケティング戦略"
              value={form.ip}
              onChange={(e) => setForm({ ...form, ip: e.target.value })}
              required
              className="w-full bg-white/[0.03] border border-white/[0.10] px-5 py-4 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#4a7fc8]/50 transition-colors"
              style={serif}
            />
          </div>

          <div>
            <label className="block text-[13px] tracking-[0.2em] text-white/50 mb-4 uppercase" style={inter}>
              Q3. 今の主な収益モデルは？
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {REVENUE_MODELS.map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => setForm({ ...form, revenueModel: model })}
                  className={`py-3 px-4 text-[13px] border transition-colors text-left ${
                    form.revenueModel === model
                      ? 'bg-[#4a7fc8]/20 border-[#4a7fc8]/60 text-white'
                      : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-[#4a7fc8]/30'
                  }`}
                  style={serif}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="field-idea" className="block text-[13px] tracking-[0.2em] text-white/50 mb-4 uppercase" style={inter}>
              Q4. 業務で手間だと感じること、またはあったらいいと思うものは？
            </label>
            <textarea
              id="field-idea"
              placeholder="例：クライアント管理が毎回手作業になっている、よくある質問への回答をいつも繰り返している"
              value={form.developmentIdea}
              onChange={(e) => setForm({ ...form, developmentIdea: e.target.value })}
              required
              rows={3}
              className="w-full bg-white/[0.03] border border-white/[0.10] px-5 py-4 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#4a7fc8]/50 transition-colors resize-none"
              style={serif}
            />
          </div>

          <div>
            <label className="block text-[13px] tracking-[0.2em] text-white/50 mb-4 uppercase" style={inter}>
              Q5. 今のビジネスで一番もどかしいことは？
            </label>
            <div className="grid grid-cols-2 gap-2">
              {SCALE_BARRIERS.map((barrier) => (
                <button
                  key={barrier}
                  type="button"
                  onClick={() => setForm({ ...form, scaleBarrier: barrier })}
                  className={`py-3 px-4 text-[13px] border transition-colors text-left ${
                    form.scaleBarrier === barrier
                      ? 'bg-[#4a7fc8]/20 border-[#4a7fc8]/60 text-white'
                      : 'bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-[#4a7fc8]/30'
                  }`}
                  style={serif}
                >
                  {barrier}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <p role="alert" className="text-[13px] text-red-400/70" style={serif}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !isSubmittable}
            className="w-full py-5 bg-[#4a7fc8] text-white text-sm tracking-[0.15em] hover:bg-[#3a6ab8] disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed transition-all"
            style={serif}
          >
            {loading ? '診断中...' : '診断する（無料）'}
          </button>
        </form>

        {result && <DiagnosisResult result={result} />}
      </div>
    </section>
  )
}
