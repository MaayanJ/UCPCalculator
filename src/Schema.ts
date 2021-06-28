export interface AppProps {
  logo: string
  steps: Step[]
}

export interface Step {
  substeps: SubStep[]
  index: number
  path: string
}

export interface SubStep {
  fields: FormField[]
  title: string
  id: string
  nextLink: string
  prevLink?: string
}

export interface FormField {
  title?: string
  action?: any
  required?: boolean
  content: any
  fieldType: string
  handler?: any
}

/**
 *  These fields all are able to be passed through a FormField class under the content parameter
 */

export interface GridButton extends FormField {
  jumbo: string
  desc: string
}

export interface RadioButtonType extends FormField {
  meta: string
  selected: boolean
}

export interface Selectors extends FormField {
  meta: string
}

export interface ClickSelector extends FormField {
  selections: Selectors[]
}

export interface GridField extends FormField {
  options: GridButton[]
}

export interface TextFieldType extends FormField {
  placeholder?: string
}

export interface RadioFieldType extends FormField {
  vals: string[]
}

/**
 *
 */

export interface RiskAnalysis {
  risk: "low" | "medium" | "high"
  title: string
  desc: string
}

export interface Criteria {
  title: string
  score: number
  maxScore: number
}

export interface CriteriaEval {
  criterias: Criteria[]
}

export interface StatBar {
  stat: string
  value: number
}

export interface StatBars {
  bars: StatBar[]
}

export interface Accordion {
  title: string
  content: any
  score: number
}
