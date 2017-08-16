import React from 'react'
import { mount, shallow } from 'enzyme'
import superagent from 'superagent'
// import mocker from 'superagent-mocker'
import appStoreCreate from '../lib/store-create.js'
import profileSettings from '../component/profile-settings'

describe('Profile Settings Container', () => {
  test('testing initial state of the profile form', () => {
    let wrapper = mount(<profileSettings />)
    console.log(wrapper.state)
    expect(wrapper.state('username')).toBe('')
    expect(wrapper.state('bio')).toBe('')
    expect(wrapper.state('avatar')).toBe('')
    expect(wrapper.state('clean')).toBe('')
  })
  test('description input  can update the state', () => {
    test('testing bio', () => {
      let wrapper = mount(<profileSettings />)
      wrapper.find('input[name="bio"]').simulate('change', {
        target: {
          name: 'bio',
          value: 'this is a bio',
        },
      })
      expect(wrapper.state('bio')).toEqual('this is a bio')
    })
  })
})
