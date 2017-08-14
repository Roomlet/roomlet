import React from 'react'
import { connect } from 'react-redux'
import Auth0EditProfileWidget from 'auth0-editprofile-widget'

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.editProfileWidget = new Auth0EditProfileWidget(
      'editProfileContainer',
      { domain: __AUTH0_CLIENT_DOMAIN__ },
      [
        {
          label: 'Name',
          type: 'text',
          attribute: 'name',
          validation: function(name) {
            return name.length > 10 ? 'The name is too long' : null
          },
        },

        { label: 'Lastname', type: 'text', attribute: 'lastname' },

        { label: 'BirthDay', type: 'date', attribute: 'birthday' },

        {
          label: 'Type',
          type: 'select',
          attribute: 'account_type',
          options: [
            { value: 'type_1', text: 'Type 1' },
            { value: 'type_2', text: 'Type 2' },
            { value: 'type_3', text: 'Type 3' },
          ],
        },
      ]
    )
  }
  render() {
    return (
      <div>
        {this.editProfileWidget.init(this.props.token)}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  token: state.token,
})

export const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
