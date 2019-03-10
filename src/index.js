import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import App from './containers/App'
import configureStore from './state/store'
import errors from './helpers/errorHandling'
import ErrorBoundary from './helpers/errorBoundary'
import * as serviceWorker from './helpers/serviceWorker'
import { saveState, loadState } from './state/localStorage'

const persistedState = loadState()
const reduxStore = configureStore(persistedState)

reduxStore.subscribe(() => saveState(reduxStore.getState()))

ReactDOM.render(
  <ErrorBoundary reason={errors.others}>
    <ReduxProvider store={reduxStore}>
      <App />
    </ReduxProvider>
  </ErrorBoundary>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
