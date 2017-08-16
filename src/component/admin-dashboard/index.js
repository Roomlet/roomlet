import React from 'react'
import { connect } from 'react-redux'
import { renderIf } from '../../lib/util.js'
import TextField from 'material-ui/TextField'
import AdminListingsItem from '../admin-listing-item'
import * as listingActions from '../../action/listing-actions'

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.listingsFetchRequest()
  }

  render() {
    return (
      <div id="admin">
        <h1>Admin Dashboard</h1>
        <ul>
          {this.props.listings.map(listing => {
            return (
              <li key={listing._id}>
                <AdminListingsItem
                  listing={listing}
                  listingUpdate={this.props.listingUpdate}
                  listingDelete={this.props.listingDelete}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listings: state.listings,
})

const mapDispatchToProps = (dispatch, getState) => ({
  listingsFetchRequest: () => {
    dispatch(listingActions.listingsFetchRequest())
  },
  listingDelete: listing => {
    dispatch(listingActions.listingDeleteRequest(listing))
  },
  listingUpdate: listing => {
    dispatch(listingActions.listingUpdateRequest(listing))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
