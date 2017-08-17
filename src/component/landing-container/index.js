import React from 'react'
import Loading from '../loading'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'
import { storeId } from '../../action/user-id-actions.js'
import { login, logout } from '../../action/auth-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import {
  profileUpdate,
  profileFetchRequest,
} from '../../action/profile-actions.js'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { Link } from 'react-router-dom'
import * as util from '../../lib/util.js'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signUp: false,
    }
    this.showLock = this.showLock.bind(this)
  }

  componentWillMount() {
    const options = {
      oidcConformant: true,
      auth: {
        audience: 'https://roomletapi/',
        params: {
          scope: 'openid profile read:listing',
        },
      },
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

    this.lock.on('signup submit', () => this.setState({ signUp: true }))

    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) return new Error('failed to authenticate')
        this.props.storeId(profile.sub)
        this.props.login(authResult.accessToken)
        this.props.profileFetch()
        this.state.signUp
          ? this.props.history.push('/settings')
          : this.props.history.push('/dashboard')
      })
    })
  }
  showLock() {
    this.lock.show()
  }

  render() {
    return (
      <div className="login-box">
        <MuiThemeProvider>
          <AppBar
            title="Roomlet"
            style={{ backgroundColor: '#3AB08F', fontFamily: 'Libre Franklin' }}
            iconElementLeft={
              <IconMenu
                iconButtonElement={
                  <IconButton iconStyle={{ fill: 'white' }}>
                    <MoreVertIcon />
                  </IconButton>
                }
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem
                  primaryText="Dashboard"
                  containerElement={<Link to="/dashboard" />}
                />
                <MenuItem
                  primaryText="Profile Settings"
                  containerElement={<Link to="/settings" />}
                />
              </IconMenu>
            }
            iconElementRight={
              <RaisedButton onClick={this.showLock} label="Signup" />
            }
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  storeId: id => dispatch(storeId(id)),
  login: token => dispatch(login(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
  profileUpdate: profile => dispatch(profileUpdate(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
