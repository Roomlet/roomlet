import React from 'react'
import ListingForm from '../listing-form'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ListingForm />
      </div>
    )
  }
}

export default DashboardContainer
