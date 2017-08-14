import React from 'react'
import Auth0Lock from 'auth0-lock'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>loading page</h1>
      </div>
    )
  }
}
export default Loading
