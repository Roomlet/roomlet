export default (state = {}, { type, payload }) => {
  switch (type) {
  case 'STORE_ID':
    return payload
  default:
    return state
  }
}
