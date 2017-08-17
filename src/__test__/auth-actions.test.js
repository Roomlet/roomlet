import { login, logout } from '../action/auth-actions.js'

describe('testing auth actions', () => {
  test('login returns LOGIN action and auth token', () => {
    let action = login('12345')
    expect(action.type).toEqual('LOGIN')
    expect(action.payload).toEqual('12345')
  })
  test('logout returns LOGOUT action and sets auth token to null', () => {
    let action = logout()
    expect(action.type).toEqual('LOGOUT')
  })
})
