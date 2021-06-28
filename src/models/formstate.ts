export enum FORMSTATE {
  UPDATE = 'upc/formstate/update_state',
}

export interface FormState {
  [key: string]: any
}

export type SupportedFormEvent = React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>

export interface FormAction {
  readonly type: FORMSTATE
  readonly payload?: [string, any]
}
