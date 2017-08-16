import React from 'react'
import ListingForm from '../listing-form'
import LandingContainer from '../landing-container'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <LandingContainer />
        <ListingForm />
      </div>
    )
  }
}

export default DashboardContainer
