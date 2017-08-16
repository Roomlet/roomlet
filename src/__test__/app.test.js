import React from 'react'
import { mount, shallow } from 'enzyme'
import superagent from 'superagent'
// import mocker from 'superagent-mocker'
import appStoreCreate from '../lib/store-create.js'
import App from '../component/app'
import ReactDOM from 'react-dom'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
