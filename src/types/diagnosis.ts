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
