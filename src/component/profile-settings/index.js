import React from 'react'
import { connect } from 'react-redux'

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.profile ? { ...props.profile } : { bio: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(props) {
    if (props.profile) this.setState(props.profile)
  }

  handleChange(e) {
    let { value, name } = e.target

    if (name === 'bio') this.setState({ bio: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    //TODO: make a patch request with token and id to api/v2/users/id
  }

  render() {
    return (
      <div className="profile-form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
          />
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

export const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)