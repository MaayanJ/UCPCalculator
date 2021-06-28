import { defaultAppState } from 'models/app'
import { ROUTE, Route, RouteAction} from 'models/route'

import { doScrolling } from 'helpers/DoScrolling'

export const setRoute = (payload: Route) => ({
  type: ROUTE.SET,
  payload
})

export const routeReducer = (state: Route = defaultAppState.route, action: RouteAction): Route => {
  const { type, payload } = action

  if (!type || !payload) return state

  switch (type) {
    case ROUTE.SET:
      doScrolling(0, 500)
      return payload
    default :
      return state
  }
}
