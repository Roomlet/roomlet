export default (state = null, { type, payload }) => {
  switch (type) {
  case 'STORE_ID':
    return payload
  default:
    return state
  }
}
