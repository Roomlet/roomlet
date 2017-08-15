import superagent from 'superagent'

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
})

export const profileUpdateRequest = profile => (dispatch, getState) => {
  let { userId, token } = getState()
  console.log('profileUpdateRequest')
  return superagent
    .patch(`https://kyleaardal.auth0.com/api/v2/users/${userId}`)
    .set('Authorization', `Bearer ${__AUTH0_API_TOKEN__}`)
    .set('accept', 'application/json')
    .set('content-type', 'application/json')
    .send(JSON.stringify({ user_metadata: { bio: profile.bio } }))
    .then(res => {
      console.log('updateprofile response', res)
      dispatch(profileUpdate(profile))
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

