import reducer from '../reducer'
import thunk from './redux-thunk.js'
import reporter from './redux-reporter.js'

import { createStore, applyMiddleware } from 'redux'

export default () => createStore(reducer, applyMiddleware(thunk, reporter))
