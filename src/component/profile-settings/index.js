import React from 'react'
import { connect } from 'react-redux'
import { profileUpdateRequest } from '../../action/profile-actions.js'

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
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('profile submit')
    this.props.profileUpdate(this.state)
    console.log('profile submit after')
    console.log(this.props, 'this.props!!!')
  }

  render() {
    return (
      <div className="profile-form">
        <div> Profile Edit </div>

        <form onSubmit={this.handleSubmit}>
          <p>
            {this.state.username}
          </p>
          <input
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <p> Bio </p>
          <textarea
            type="text"
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
          />
          <p> Phone Number </p>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <p> Budget </p>
          <input
            type="text"
            name="budget"
            value={this.state.budget}
            onChange={this.handleChange}
          />
          <p> Ocupation </p>
          <input
            type="text"
            name="ocupation"
            value={this.state.ocupation}
            onChange={this.handleChange}
          />
          <p> Smoke </p>
          <input
            type="checkbox"
            name="smoke"
            value={this.state.smoke}
            onChange={this.handleChange}
          />

          <p> Pets, clean, hours </p>

          <button type="submit"> Submit </button>
        </form>
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
