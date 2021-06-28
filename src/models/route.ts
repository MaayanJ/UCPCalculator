export enum ROUTE {
  SET = 'upc/route/SET'
}

export interface Route {
  page: number
  step: number
  readyState?: boolean
}

export type Routes = Route[]

export interface RouteAction {
  type: ROUTE
  payload: Route
}
