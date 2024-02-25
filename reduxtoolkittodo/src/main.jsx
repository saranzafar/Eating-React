import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './apps/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // we use "wrapper and its value here too"
  <Provider store={store}>
    <App />
  </Provider>,
)
