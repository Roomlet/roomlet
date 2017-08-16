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

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.profile
      ? { ...props.profile }
      : {
        username: '',
        bio: '',
        budget: '',
        ocupation: '',
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
    let { value, name } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('profile submit')
    this.props.profileUpdate(this.state)
    console.log('profile submit after')
    console.log(this.props, 'this.props!!!')
  }

  render() {
    const underlineFocus = {
      borderBottomColor: '#3AB08F',
    }

    const formStyle = {
      marginLeft: 20,
    }

    return (
      <div className="profile-form">
        <LandingContainer />
        <MuiThemeProvider>
          <Paper zDepth={2}>
            <form onSubmit={this.handleSubmit}>
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
})

export const mapDispatchToProps = dispatch => ({
  profileUpdate: profile => dispatch(profileUpdateRequest(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
