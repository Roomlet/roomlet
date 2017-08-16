import superagent from 'superagent'

export const listingsSet = listings => ({
  type: 'LISTINGS_SET',
  payload: listings,
})

export const listingCreate = listing => ({
  type: 'LISTING_CREATE',
  payload: listing,
})

export const listingUpdate = listing => ({
  type: 'LISTING_UPDATE',
  payload: listing,
})

export const listingDelete = listing => ({
  type: 'LISTING_DELETE',
  payload: listing,
})

export const listingsFetchRequest = listing => (dispatch, getState) => {
  return superagent
    .get(`${__API_URL__}/api/listings`)
    .set('Authorization', `Bearer ${listing.token}`)
    .then(res => {
      dispatch(listingsSet(res.body.data))
      return res
    })
}

export const listingCreateRequest = listing => (dispatch, getState) => {
  console.log('listing in listing actions lisitngCreateRequest', listing)
  return superagent
    .post(`${__API_URL__}/api/listings`)
    .set('Authorization', `Bearer ${listing.token}`)
    .send(listing)
    .then(res => {
      dispatch(listingCreate(res.body))
      return res
    })
}

export const listingDeleteRequest = listing => (dispatch, getState) => {
  return superagent
    .delete(`${__API_URL__}/api/listings/${listing._id}`)
    .set('Authorization', `Bearer ${listing.token}`)
    .then(res => {
      dispatch(listingDelete(listing))
      return res
    })
}

export const listingUpdateRequest = listing => (dispatch, getState) => {
  return superagent
    .put(`${__API_URL__}/api/listings/${listing._id}`)
    .set('Authorization', `Bearer ${listing.token}`)
    .send(listing)
    .then(res => {
      dispatch(listingUpdate(res.body))
      return res
    })
}
