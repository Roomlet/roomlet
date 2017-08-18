import {
  profileUpdate,
  profileUpdateRequest,
} from '../../action/profile-actions.js'

describe('testing profile actions', () => {
  let mockState = []
  test('profileUpdate returns a PROFILE_UPDATE action', () => {
    let mockProfile = {
      token: 'adkfjhalksjdfh',
      username: 'username',
      email: 'email@email.com',
    }
    let action = profileUpdate(mockProfile)
    expect(action).toEqual({
      type: 'PROFILE_UPDATE',
      payload: mockProfile,
    })
  })
})
