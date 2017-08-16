export default (state = [], action) => {
  let { type, payload } = action
  switch (type) {
  case 'LISTINGS_SET':
    return payload
  case 'LISTING_CREATE':
    payload.userId = state.user_id
    return [payload, ...state]
  case 'LISTING_UPDATE':
    return state.map(item => (item._id === payload._id ? payload : item))
  case 'LISTING_DELETE':
    return state.filter(item => item._id !== payload._id)
  case 'LOGOUT':
    return []
  default:
    return state
  }
}
