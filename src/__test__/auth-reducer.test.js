import authReducer from '../reducer/auth.js'

describe('testing auth reducer', () => {
  test('inital state should be null', () => {
    let result = authReducer(undefined, { type: null })
    expect(result).toEqual(null)
  })

  test('if the acytion type isnt registerd it will return the state', () => {
    let mockState = [{ token: 'asdkfhalsdfh' }]

    let result = authReducer(mockState, { type: null })
    expect(result).toEqual(mockState)
  })

  test('LOGIN should append to the array', () => {
    let actionOne = {
      type: 'LOGIN',
      payload: 'sadfhadklsjfh',
    }

    let state = authReducer([], actionOne)
    expect(state).toBe(actionOne.payload)
  })

  test('LOGOUT should append to the array', () => {
    let actionTwo = {
      type: 'LOGOUT',
    }

    let state = authReducer(state, actionTwo)
    expect(state).toBe(null)
  })
})
