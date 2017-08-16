import React from 'react'
import { connect } from 'react-redux'
import { profileUpdateRequest } from '../../action/profile-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SmokeFree from 'material-ui/svg-icons/places/smoke-free'
import Smoke from 'material-ui/svg-icons/places/smoking-rooms'
import Pets from 'material-ui/svg-icons/action/pets'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import LandingContainer from '../landing-container'
import * as util from '../../lib/util.js'
import uuid from 'uuid/v1'
import Avatar from 'material-ui/Avatar'

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.profile
      ? { ...props.profile }
      : {
        username: '',
        avatar: '',
        preview: '',
        bio: '',
        budget: '',
        occupation: '',
        smoke: '',
        pets: '',
        clean: '',
        hours: '',
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(props) {
    if (props.profile) this.setState(props.profile)
  }

  handleChange(e) {
    let { value, name, files } = e.target

    if (name === 'avatar') {
      // let { files } = e.target
      let avatar = files[0]
      this.setState({ [name]: value })
      util
        .photoToDataURL(avatar)
        .then(preview => this.setState({ preview }))
        .catch(console.error)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.profileUpdate(this.state)
  }

  render() {
    const underlineFocus = {
      borderBottomColor: '#3AB08F',
    }

    const formStyle = {
      marginLeft: 20,
    }
    console.log(this.state)
    return (
      <div className="profile-form">
        <LandingContainer />
        <MuiThemeProvider>
          <Paper zDepth={2}>
            <form onSubmit={this.handleSubmit}>
              <RaisedButton
                containerElement="label"
                label="Upload Photo"
                style={{ margin: 20 }}
              >
                <div className="previewComponent">
                  <input
                    type="file"
                    name="avatar"
                    value={this.state.avatar}
                    onChange={this.handleChange}
                    style={{ display: 'none' }}
                  />
                </div>
              </RaisedButton>
              <TextField
                type="username"
                name="username"
                hintText={this.state.username}
                value={this.state.username}
                onChange={this.handleChange}
                underlineShow={false}
                style={formStyle}
              />
              <Divider />
              <TextField
                type="text"
                name="bio"
                value={this.state.bio}
                onChange={this.handleChange}
                underlineShow={false}
                multiLine={true}
                rows={4}
                style={formStyle}
                hintText="Enter a Bio"
              />
              <Divider />
              <TextField
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                underlineShow={false}
                style={formStyle}
                hintText="Phone Number"
              />
              <Divider />
              <TextField
                type="text"
                name="budget"
                value={this.state.budget}
                onChange={this.handleChange}
                underlineShow={false}
                style={formStyle}
                hintText="Budget"
              />
              <Divider />
              <TextField
                type="text"
                name="ocupation"
                value={this.state.ocupation}
                onChange={this.handleChange}
                underlineShow={false}
                style={formStyle}
                hintText="Occupation"
              />
              <Divider />
              <Checkbox
                checkedIcon={<Smoke />}
                uncheckedIcon={<SmokeFree style={{ fill: 'red' }} />}
                value={this.state.smoke}
                onChange={this.handleChange}
                iconStyle={{ fill: 'black' }}
                style={{ margin: 20, float: 'left' }}
                label="Smoker"
                labelStyle={{ opacity: '.3' }}
              />
              <Checkbox
                checkedIcon={<Pets />}
                uncheckedIcon={<Pets style={{ fill: 'red ' }} />}
                value={this.state.smoke}
                onChange={this.handleChange}
                iconStyle={{ fill: 'black' }}
                style={{ margin: 20 }}
                label="Pets"
                labelStyle={{ opacity: '.3' }}
              />
              <Divider />
              <TimePicker
                hintText="Regular Hours"
                style={formStyle}
                dialogStyle={{
                  backgroundColor: '#3AB08F',
                }}
                dialogBodyStyle={{
                  color: 'black',
                }}
                underlineShow={false}
              />
              <Divider />

              <RaisedButton
                style={{ margin: 20 }}
                label="Submit"
                type="submit"
              />
            </form>
          </Paper>
        </MuiThemeProvider>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  token: state.token,
  userId: state.userId,
  avatar: state.preview,
})

export const mapDispatchToProps = dispatch => ({
  profileUpdate: profile => dispatch(profileUpdateRequest(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
