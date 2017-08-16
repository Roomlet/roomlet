import React from 'react'
import { connect } from 'react-redux'
import * as listingActions from '../../action/listing-actions.js'

class ListingItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {}
  render() {
    console.log(this.props.listings)
    return (
      <div>
        {this.props.listings
          .filter(listing => listing.verified === this.props.verified)
          .map((listing, i) => {
            return (
              <li key={listing._id}>
                name: {listing.name}
                <br />
                url: {listing.listingURL}
                <button
                  onClick={() => this.props.listingDelete(listing)}
                  className="listing-delete"
                >
                  x
                </button>
              </li>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listings: state.listings,
})

const mapDispatchToProps = (dispatch, getState) => ({
  listingDelete: listing => {
    dispatch(listingActions.listingDeleteRequest(listing))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem)
