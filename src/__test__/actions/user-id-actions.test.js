import { storeId } from '../../action/user-id-actions.js'

describe('testing userID actions', () => {
  let mockState = []
  test('storeId returns a STORE_ID action', () => {
    let mockId = {
      id: '12345',
    }
    let action = storeId(mockId)
    expect(action).toEqual({
      type: 'STORE_ID',
      payload: mockId,
    })
  })
})
