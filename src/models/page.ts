import { Step } from 'models/step'

export interface Page {
  pageName: string
  steps: Step[]
}
