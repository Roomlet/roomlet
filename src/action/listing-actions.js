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
  console.log('fetch all')
  let { auth } = getState()
  return superagent
    .get(`${__API_URL__}/api/listings`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(listingsSet(res.body))
      return res
    })
}

export const listingsFetchByUserRequest = userId => (dispatch, getState) => {
  console.log('fetch for user', getState())
  let { auth, userId } = getState()
  console.log('userId')
  return superagent
    .get(`${__API_URL__}/api/listings/${userId}`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      console.log('fetch by user response', res.text)
      try {
        let parsed = JSON.parse(res.text)
        dispatch(listingsSet(parsed))
      } catch (err) {
        console.error(err)
      }
      return res
    })
}

export const listingCreateRequest = listing => (dispatch, getState) => {
  let { auth } = getState()
  return superagent
    .post(`${__API_URL__}/api/listings`)
    .set('Authorization', `Bearer ${auth}`)
    .send(listing)
    .then(res => {
      console.log(res)
      dispatch(listingCreate(res.body))
      return res
    })
}

export const listingDeleteRequest = listing => (dispatch, getState) => {
  let { auth } = getState()
  return superagent
    .delete(`${__API_URL__}/api/listings/${listing._id}`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(listingDelete(listing))
      return res
    })
}

export const listingUpdateRequest = listing => (dispatch, getState) => {
  let { auth } = getState()
  return superagent
    .put(`${__API_URL__}/api/listings/${listing._id}`)
    .set('Authorization', `Bearer ${auth}`)
    .send(listing)
    .then(res => {
      dispatch(listingUpdate(res.body))
      return res
    })
}
