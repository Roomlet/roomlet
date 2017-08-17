import React from 'react'
import { mount, shallow } from 'enzyme'
import superagent from 'superagent'
// import mocker from 'superagent-mocker'
import storeCreate from '../lib/store-create.js'
import { persistStore } from 'redux-persist'
import ProfileSettings from '../component/profile-settings'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SmokeFree from 'material-ui/svg-icons/places/smoke-free'
import Smoke from 'material-ui/svg-icons/places/smoking-rooms'
import Pets from 'material-ui/svg-icons/action/pets'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'

describe('Profile Settings Container', () => {
  test('testing initial rendering', () => {
    const store = storeCreate()
    persistStore(store)
    const wrapper = mount(<ProfileSettings store={store} />)
    const div = document.createElement('div')
    ReactDOM.render(<wrapper />, div)
  })
})
