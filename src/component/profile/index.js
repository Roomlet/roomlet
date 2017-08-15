import React from 'react'
import { connect } from 'react-redux'
import ProfileWidget from 'auth0-editprofile-widget'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        {editProfileWidget.init(user_token)}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  token: state.token,
})
