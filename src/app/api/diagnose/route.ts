import { NextRequest, NextResponse } from 'next/server'
import { anthropic } from '@/lib/anthropic'

export interface DiagnosisInput {
  job: string
  ip: string
  revenueModel: string
  developmentIdea: string
  scaleBarrier: string
}

export interface DiagnosisResult {
  mvpName: string
  mvpDescription: string
  mvpType: 'A' | 'B' | 'C' | 'D'
  traditionalCost: string
  traditionalDuration: string
  expectedImpact: string
  nextAction: string
}

const MAX_FIELD_LENGTH = 500

function validateInput(input: unknown): input is DiagnosisInput {
  if (typeof input !== 'object' || input === null) return false
  const o = input as Record<string, unknown>
  const fields: (keyof DiagnosisInput)[] = ['job', 'ip', 'revenueModel', 'developmentIdea', 'scaleBarrier']
  for (const field of fields) {
    const val = o[field]
    if (typeof val !== 'string' || val.trim() === '' || val.length > MAX_FIELD_LENGTH) {
      return false
    }
  }
  return true
}

function isDiagnosisResult(obj: unknown): obj is DiagnosisResult {
  if (typeof obj !== 'object' || obj === null) return false
  const o = obj as Record<string, unknown>
  return (
    typeof o.mvpName === 'string' &&
    typeof o.mvpDescription === 'string' &&
    ['A', 'B', 'C', 'D'].includes(o.mvpType as string) &&
    typeof o.traditionalCost === 'string' &&
    typeof o.traditionalDuration === 'string' &&
    typeof o.expectedImpact === 'string' &&
    typeof o.nextAction === 'string'
  )
}

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'サービス設定エラー' }, { status: 503 })
  }

  let rawBody: unknown
  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json({ error: 'リクエストの形式が正しくありません' }, { status: 400 })
  }

  if (!validateInput(rawBody)) {
    return NextResponse.json({ error: '入力内容を確認してください' }, { status: 400 })
  }
  const body = rawBody as DiagnosisInput

  const prompt = `あなたはClaudeCodeを使ったMVP開発の専門家です。
以下の個人事業主の情報を元に、具体的なMVP診断結果をJSON形式で生成してください。

【入力情報】
職業・専門領域：${body.job}
IP・メソッド：${body.ip}
主な収益モデル：${body.revenueModel}
作りたかった開発アイデア：${body.developmentIdea}
スケールを妨げる壁：${body.scaleBarrier}

【MVPの型（最も適したものを1つ選ぶ）】
A: AI診断ツール（入力→AI分析→結果表示）
B: AIチャットBot（自分のIPで答えるQ&A窓口）
C: 自動レポート生成（データ入力→分析レポート出力）
D: LP＋フォーム（自前の集客ページ）

以下のJSON形式のみで回答してください（他のテキスト不要）：
{
  "mvpName": "このIPに最適なMVPの具体的な名称（例：節税余地診断ツール）",
  "mvpDescription": "MVPの具体的な説明。ユーザーが何を入力すると何が返ってくるか（2文以内）",
  "mvpType": "A/B/C/Dのいずれか1文字",
  "traditionalCost": "従来の外注開発費の見積もり（例：約300万円）",
  "traditionalDuration": "従来の開発期間（例：4〜6ヶ月）",
  "expectedImpact": "このMVPが完成した後の期待されるビジネスインパクト（1文）",
  "nextAction": "2時間セッションで最初に作るべきもの（1文）"
}`

  let message
  try {
    message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })
  } catch (err) {
    console.error('[diagnose] Anthropic API error:', err)
    return NextResponse.json({ error: '診断サービスに接続できませんでした' }, { status: 503 })
  }

  const content = message.content[0]
  if (content.type !== 'text') {
    return NextResponse.json({ error: '診断に失敗しました' }, { status: 500 })
  }

  let result: DiagnosisResult
  try {
    const parsed = JSON.parse(content.text)
    if (!isDiagnosisResult(parsed)) {
      throw new Error('Invalid result structure')
    }
    result = parsed
  } catch {
    console.error('[diagnose] JSON parse failed:', content.text)
    return NextResponse.json({ error: '診断結果の解析に失敗しました' }, { status: 500 })
  }

  return NextResponse.json(result)
}
