import profileReducer from '../../reducer/profile.js'

describe('testing profile reducer', () => {
  let mockState = []
  test('inital state should be null', () => {
    let result = profileReducer(undefined, { type: null })
    expect(result).toEqual({})
  })
  test('PROFILE_UPDATE should return payload', () => {
    let actionUpdate = {
      type: 'PROFILE_UPDATE',
      payload: 'profile',
    }
    let state = profileReducer(mockState, actionUpdate)
    expect(state).toBe(actionUpdate.payload)
  })
})
