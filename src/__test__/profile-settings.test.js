import React from 'react'
import ReactDOM from 'react-dom'
import superagent from 'superagent'
import Paper from 'material-ui/Paper'
import { mount, shallow } from 'enzyme'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import { persistStore } from 'redux-persist'
import TextField from 'material-ui/TextField'
import TimePicker from 'material-ui/TimePicker'
import storeCreate from '../lib/store-create.js'
import RaisedButton from 'material-ui/RaisedButton'
import Pets from 'material-ui/svg-icons/action/pets'
import ProfileSettings from '../component/profile-settings'
import Smoke from 'material-ui/svg-icons/places/smoking-rooms'
import SmokeFree from 'material-ui/svg-icons/places/smoke-free'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

describe('Profile Settings Container', () => {
  const store = createStore(console.log, {})

  test('testing initial state', () => {
    let wrapper = mount(
      <Provider store={store}>
        <ProfileSettings />
      </Provider>
    )
    expect(wrapper.state('username')).toBe('')
    expect(wrapper.state('avatar')).toBe('')
    expect(wrapper.state('preview')).toBe('')
    expect(wrapper.state('bio')).toBe('')
    expect(wrapper.state('budget')).toBe('')
    expect(wrapper.state('occupation')).toBe('')
    expect(wrapper.state('smoke')).toBe('')
    expect(wrapper.state('pets')).toBe('')
    expect(wrapper.state('clean')).toBe('')
    expect(wrapper.state('hours')).toBe('')
  })
})
