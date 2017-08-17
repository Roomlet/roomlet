import React from 'react'
import ReactDOM from 'react-dom'
import App from '../component/app'
import superagent from 'superagent'
import { mount, shallow } from 'enzyme'
import appStoreCreate from '../lib/store-create.js'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
