import {
  listingsSet,
  listingCreate,
  listingUpdate,
  listingDelete,
  listingsFetchRequest,
  listingCreateRequest,
  listingUpdateRequest,
  listingDeleteRequest,
} from '../action/listing-actions.js'

describe('testing listing actions', () => {
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

  test('listingCreate returns a LISTING_CREATE action', () => {
    let action = listingCreate({
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
    })
    expect(action.type).toEqual('LISTING_CREATE')
    expect(action.payload._id).toBeTruthy()
    expect(action.payload.title).toBe('title')
  })

  test('listingUpdate returns a LISTING_UPDATE action', () => {
    let mockListing = {
      userId: 'user',
      _id: 12345,
      title: 'test',
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
    }
    let action = listingUpdate(mockListing)
    expect(action).toEqual({
      type: 'LISTING_UPDATE',
      payload: mockListing,
    })
  })

  test('listingDelete returns a LISTING_DELETE action', () => {
    let mockListing = {
      userId: 'user',
      _id: 12345,
      title: 'test',
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
    }
    let action = listingDelete(mockListing)
    expect(action).toEqual({
      type: 'LISTING_DELETE',
      payload: mockListing,
    })
  })
})
