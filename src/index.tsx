import * as React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from 'controllers/reduxController'

import Main from 'views/Main'

import './assets/styles/app.scss'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)

