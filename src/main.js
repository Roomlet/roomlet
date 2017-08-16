import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import { Provider } from 'react-redux'
import storeCreate from './lib/store-create'
import { persistStore } from 'redux-persist'

const store = storeCreate()
persistStore(store)

class Main extends React.Component {
  componentDidUpdate() {
    persistStore(store)
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('root'))
