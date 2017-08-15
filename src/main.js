import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import { Provider } from 'react-redux'
import storeCreate from './lib/store-create'

const store = storeCreate()

let Main = () =>
  <Provider store={store}>
    <App />
  </Provider>

ReactDom.render(<Main />, document.getElementById('root'))
