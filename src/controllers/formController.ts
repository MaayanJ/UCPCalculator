import { defaultAppState } from 'models/app'
import { FORMSTATE, FormState, FormAction } from 'models/formstate'

export type UpdateForm = (key: string, value: any) => FormAction

export const updateForm: UpdateForm = (key, value) => ({
  type: FORMSTATE.UPDATE,
  payload: [key, value]
})

export const formReducer = (state: FormState = defaultAppState.form, action: FormAction) => {
  const { type, payload } = action

  if (!type || !payload) return state

  let newState = { ...state }

  switch (type) {
    case FORMSTATE.UPDATE :
      newState[payload[0]] = payload[1]
      return newState
    default:
      return state
  }
}
