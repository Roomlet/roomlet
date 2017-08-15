import { combineReducers } from 'redux'
import auth from './auth.js'
import userId from './user-id.js'
import profile from './profile.js'

export default combineReducers({ auth, userId, profile })
