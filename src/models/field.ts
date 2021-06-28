export interface Field {
  id: string
  type: string
  required?: boolean
  label?: string

  count?: number


  content?: {
    min?: number
    max?: number | number[]
    optionsStyle?: number
    float?: number

    pdfDownloadButton?: boolean
    progressBar?: boolean
    withSeparator?: boolean

    riskName?: string
    heading?: string
    idToStore?: string
    subheading?: string
    description?: string
    footnote?: string
    tooltip?: string
    topextra?: string
    resultId?: string
    formula?: string
    checkbox?: string
    resultType?: string
    rightTextType?: string

    options?: any[]
    dependencies?: string[]
    multiHeader?: string[]
    weightByDependency?: number[]
  }
}
