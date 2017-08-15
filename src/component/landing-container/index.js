import React from 'react'
import Loading from '../loading'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'
import { storeId } from '../../action/user-id-actions.js'
import { login, logout } from '../../action/auth-actions.js'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.showLock = this.showLock.bind(this)
  }

  componentWillMount() {
    const options = {
      theme: {
        logo: '../../../roomlet.png',
        primaryColor: '#3AB08F',
      },
      languageDictionary: {
        title: 'Roomlet',
      },
    }

    this.lock = new Auth0Lock(
      __AUTH0_CLIENT_ID__,
      __AUTH0_CLIENT_DOMAIN__,
      options
    )

    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) return new Error('failed to authenticate')
        console.log('PROFILE', profile.user_id)
        this.props.login(authResult.accessToken)
        this.props.storeId(profile.user_id)
        this.props.history.push('/settings')
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
  storeId: id => dispatch(storeId(id)),
  login: token => dispatch(login(token)),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
