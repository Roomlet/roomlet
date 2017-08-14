import superagent from 'superagent'

export const login = token => {
  localStorage.setItem('authToken', token)
  return {
    type: 'LOGIN',
    payload: token,
  }
}
export const logout = () => {
  localStorage.setItem('authToken', null)
  return { type: 'LOGOUT' }
}
