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

export async function POST(request: NextRequest) {
  const body: DiagnosisInput = await request.json()

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

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    return NextResponse.json({ error: '診断に失敗しました' }, { status: 500 })
  }

  const result: DiagnosisResult = JSON.parse(content.text)
  return NextResponse.json(result)
}
