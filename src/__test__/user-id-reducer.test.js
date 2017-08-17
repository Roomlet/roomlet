import userIdReducer from '../reducer/user-id.js'

describe('testing userId reducer', () => {
  let mockState = []

  test('inital state should be null', () => {
    let result = userIdReducer(undefined, { type: null })
    expect(result).toEqual(null)
  })

  test('STORE_ID should return payload', () => {
    let actionUpdate = {
      type: 'STORE_ID',
      payload: 'userId',
    }
    let state = userIdReducer(mockState, actionUpdate)
    expect(state).toBe(actionUpdate.payload)
  })
})
