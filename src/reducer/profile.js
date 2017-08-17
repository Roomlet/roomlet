export default (state = {}, { type, payload }) => {
  switch (type) {
  case 'PROFILE_FETCH':
    return payload
  case 'PROFILE_UPDATE':
    return payload
  default:
    return state
  }
}
