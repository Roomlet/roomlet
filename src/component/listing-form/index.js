import React from 'react'
import { connect } from 'react-redux'
import ListingItem from '../listing-item'
import { listingCreateRequest } from '../../action/listing-actions'

class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      listingURL: '',
      listingCreatedOn: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'name') this.setState({ name: e.target.value })
    if (e.target.name === 'listingURL')
      this.setState({ listingURL: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('profile in listing form', this.props.profile)
    this.state.listingCreatedOn = new Date()

    this.props.listingCreate(this.state)

    this.setState({ listingURL: '' })
    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        <form id="listing form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="listingURL"
            type="text"
            placeholder="listing URL"
            value={this.state.listingURL}
            onChange={this.handleChange}
          />
          <button>add listing</button>
        </form>
        <ul id="unverified-listings">
          <ListingItem listings={this.props.listings} />
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  profile: state,
  listings: state.listings,
})

export const mapDispatchToProps = dispatch => ({
  listingCreate: listing => dispatch(listingCreateRequest(listing)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)
