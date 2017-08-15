import { combineReducers } from 'redux'
import auth from './auth.js'
import userId from './user-id.js'
import profile from './profile.js'
import listings from './listing.js'

export default combineReducers({ auth, userId, profile, listings })

