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

  componentDidMount() {
    this.props.listingsFetchRequest({ token: this.props.token })
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
                  token={this.props.token}
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
  token: state.auth,
  listings: state.listings,
})

const mapDispatchToProps = (dispatch, getState) => ({
  listingsFetchRequest: listing => {
    dispatch(listingActions.listingsFetchRequest(listing))
  },
  listingDelete: listing => {
    dispatch(listingActions.listingDeleteRequest(listing))
  },
  listingUpdate: listing => {
    dispatch(listingActions.listingUpdateRequest(listing))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
