import React from 'react'
import { connect } from 'react-redux'
import { profileUpdateRequest } from '../../action/profile-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SmokeFree from 'material-ui/svg-icons/places/smoke-free'
import Smoke from 'material-ui/svg-icons/places/smoking-rooms'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'

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
    //smoke and hours need to be adjusted
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

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      display: 'inline-block',
    }

    return (
      <div className="profile-form">
        <div> Profile Edit </div>
        <MuiThemeProvider>
          <form onSubmit={this.handleSubmit}>
            <p>
              {this.state.username}
            </p>
            <TextField
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              underlineFocusStyle={underlineFocus}
            />
            <p> Bio </p>
            <TextField
              type="text"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              underlineFocusStyle={underlineFocus}
              multiLine={true}
              rows={4}
            />
            <p> Phone Number </p>
            <TextField
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              underlineFocusStyle={underlineFocus}
            />
            <p> Budget </p>
            <TextField
              type="text"
              name="budget"
              value={this.state.budget}
              onChange={this.handleChange}
              underlineFocusStyle={underlineFocus}
            />
            <p> Ocupation </p>
            <TextField
              type="text"
              name="ocupation"
              value={this.state.ocupation}
              onChange={this.handleChange}
              underlineFocusStyle={underlineFocus}
            />
            <p> Smoke </p>

            <Checkbox
              checkedIcon={<SmokeFree />}
              uncheckedIcon={<Smoke />}
              value={this.state.smoke}
              onChange={this.handleChange}
              iconStyle={{ fill: 'black' }}
            />

            <p> Pets, clean, hours </p>

            <button type="submit"> Submit </button>
          </form>
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
