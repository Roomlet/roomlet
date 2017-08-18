import listingReducer from '../../reducer/listing.js'

describe('testing listing reducer', () => {
  let mockState = [
    {
      userId: 'user',
      _id: 12345,
      title: 'title',
      updating: false,
      listingCreatedOn: new Date(),
      listingURL: 'url',
      verified: false,
      cost: 42,
      landlordPhone: 123,
      petsAllowed: false,
      nonSmoking: false,
      comment: 'comment',
      parkingSpaces: 42,
    },
  ]

  let action = {
    type: 'LISTING_CREATE',
    payload: {
      userId: 'user',
      _id: 12345,
      title: 'title',
      updating: false,
      listingCreatedOn: new Date(),
      listingURL: 'url',
      verified: false,
      cost: 42,
      landlordPhone: 123,
      petsAllowed: false,
      nonSmoking: false,
      comment: 'comment',
      parkingSpaces: 42,
    },
  }

  test('inital state should be null', () => {
    let result = listingReducer(undefined, { type: null })
    expect(result).toEqual([])
  })

  test('if the action type isnt registerd it will return the state', () => {
    let result = listingReducer(mockState, { type: null })
    expect(result).toEqual(mockState)
  })

  test('LISTING_CREATE should return payload', () => {
    let state = listingReducer([], action)
    expect(...state).toBe(action.payload)
  })

  test('LISTING_UPDATE should return payload', () => {
    let actionUpdate = {
      type: 'LISTING_UPDATE',
      payload: {
        userId: 'another-user',
        _id: 12345,
        title: 'title',
        updating: false,
        listingCreatedOn: new Date(),
        listingURL: 'url',
        verified: false,
        cost: 42,
        landlordPhone: 123,
        petsAllowed: false,
        nonSmoking: false,
        comment: 'comment',
        parkingSpaces: 42,
      },
    }
    let state = listingReducer(mockState, actionUpdate)
    expect(...state).toBe(actionUpdate.payload)
  })

  test('LISTING_DELETE should return empty Array', () => {
    let actionDelete = {
      type: 'LISTING_DELETE',
      payload: {
        userId: 'another-user',
        _id: 12345,
        title: 'title',
        updating: false,
        listingCreatedOn: new Date(),
        listingURL: 'url',
        verified: false,
        cost: 42,
        landlordPhone: 123,
        petsAllowed: false,
        nonSmoking: false,
        comment: 'comment',
        parkingSpaces: 42,
      },
    }
    let state = listingReducer(mockState, actionDelete)
    expect(state).toEqual([])
  })
  test('LOGOUT should return empty Array', () => {
    let actionLogout = {
      type: 'LOGOUT',
      payload: null,
    }
    let state = listingReducer(mockState, actionLogout)
    expect(state).toEqual([])
  })
})
