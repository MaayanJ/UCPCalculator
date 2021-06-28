import { createStore, combineReducers } from 'redux'

import { alertsReducer } from 'controllers/alertController'
import { routeReducer } from 'controllers/routeController'
import { formReducer } from 'controllers/formController'

import { defaultAppState } from 'models/app'

const rootReducer = combineReducers({
  alerts: alertsReducer,
  route: routeReducer,
  form: formReducer
})

export const store = createStore(
  rootReducer,
  defaultAppState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
