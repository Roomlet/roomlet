import React from 'react'
import Loading from '../loading'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'
import { login, logout } from '../../action/auth-actions.js'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.showLock = this.showLock.bind(this)
  }

  componentWillMount() {
    this.lock = new Auth0Lock(__AUTH0_CLIENT_ID__, __AUTH0_CLIENT_DOMAIN__)
    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) return new Error('failed to authenticate')
        this.props.login(authResult.accessToken)
      })
    })
  }
  showLock() {
    this.lock.show()
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this.showLock}>Sign In</a>
        <Loading lock={this.state.lock} />
      </div>
    )
  }
}

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({
  login: token => dispatch(login(token)),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
