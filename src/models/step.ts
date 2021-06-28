import { Field } from 'models/field'

export interface Step {
  label: string
  jumbo?: string
  background?: string

  doubleLayout?: boolean

  fields: Field[]

  innovationDependency?: number[]
  content?: {
    tooltip: string
  }
}
