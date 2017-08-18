import superagent from 'superagent'

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
})

export const profileFetch = profile => ({
  type: 'PROFILE_FETCH',
  payload: profile,
})

export const profileFetchRequest = () => (dispatch, getState) => {
  let { userId } = getState()
  return superagent
    .get(`https://kyleaardal.auth0.com/api/v2/users/${userId}`)
    .set('Authorization', `Bearer ${__AUTH0_API_TOKEN__}`)
    .then(res => {
      try {
        let parsed = JSON.parse(res.text)
        dispatch(profileFetch(parsed.user_metadata.profile))
      } catch (err) {
        console.log(err)
      }
      return res
    })
    .catch(err => console.log(err))
}

export const profileUpdateRequest = profile => (dispatch, getState) => {
  let { userId } = getState()
  return superagent
    .patch(`https://kyleaardal.auth0.com/api/v2/users/${userId}`)
    .set('Authorization', `Bearer ${__AUTH0_API_TOKEN__}`)
    .set('accept', 'application/json')
    .set('content-type', 'application/json')
    .send(JSON.stringify({ user_metadata: { profile: profile } }))
    .then(res => {
      console.log('updateprofile response', res)
      dispatch(profileUpdate(profile))
      return res
    })
    .catch(err => {
      console.log(err)
    })
}
