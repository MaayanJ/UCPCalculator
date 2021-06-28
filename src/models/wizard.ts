import { Page } from 'models/page'
import { Route } from 'models/route'

export interface Wizard {
  data: Page[]
  pageCount: number
  stepCount: number
  route: Route
}
