import React from 'react'
import Loading from '../loading'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'
import { storeId } from '../../action/user-id-actions.js'
import { login, logout } from '../../action/auth-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import { profileUpdate } from '../../action/profile-actions.js'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { Link } from 'react-router-dom'
import * as util from '../../lib/util.js'
import Avatar from 'material-ui/Avatar'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signUp: false,
      landing: true,
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

    this.lock.on('signup submit', () =>
      this.setState({ signUp: true, landing: false })
    )

    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) return new Error('failed to authenticate')
        console.log('PROFILE', profile)
        this.props.storeId(profile.user_id)
        this.props.login(authResult.accessToken)
        if (profile.user_metadata)
          this.props.profileUpdate(profile.user_metadata.profile)

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
    console.log(this.state)
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
                    <Avatar
                      src={this.props.avatar}
                      size={32}
                      style={{ verticalAlign: 'middle' }}
                    />
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
              <RaisedButton
                onClick={this.showLock}
                label="Signup"
                style={{ verticalAlign: 'middle', height: '80%' }}
              />
            }
          />
        </MuiThemeProvider>
        <div>
          {util.renderIf(
            this.state.landing,
            <MuiThemeProvider>
              <Card>
                <CardMedia>
                  <img src="../../../bay.jpeg" />
                </CardMedia>
              </Card>
            </MuiThemeProvider>
          )}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  storeId: id => dispatch(storeId(id)),
  login: token => dispatch(login(token)),
  profileUpdate: profile => dispatch(profileUpdate(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
