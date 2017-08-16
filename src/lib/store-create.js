import reducer from '../reducer'
import thunk from './redux-thunk.js'
import reporter from './redux-reporter.js'
import { persistStore, autoRehydrate } from 'redux-persist'
import { compose, createStore, applyMiddleware } from 'redux'

export default () =>
  createStore(
    reducer,
    compose(applyMiddleware(thunk, reporter), autoRehydrate())
  )
