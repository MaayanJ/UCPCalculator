import { Resources, Resource } from './app'

export enum ALERT {
  CREATE = 'upc/alert/CREATE_ALERT',
  DELETE = 'upc/alert/DELETE_ALERT'
}

export interface Alert extends Resource {
  key: string
  status: string
  message: string
  dismissable?: boolean
  dismissAfter?: number
}

export interface Alerts extends Resources {
  data: {
    [key: string]: Alert
  }
}

export interface AlertAction {
  readonly type: ALERT
  readonly payload?: Alert
}
