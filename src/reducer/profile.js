export default (state = {}, { type, payload }) => {
  switch (type) {
  case 'PROFILE_UPDATE':
    return payload
  default:
    return state
  }
}
