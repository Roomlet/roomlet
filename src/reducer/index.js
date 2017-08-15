import { combineReducers } from 'redux'
import auth from './auth.js'
import userId from './user-id.js'

export default combineReducers({ auth, userId })
