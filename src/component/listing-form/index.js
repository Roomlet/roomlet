import React from 'react'
import { connect } from 'react-redux'
import { listingCreate } from '../../action/listing-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import ListingItem from '../listing-item'
import { listingCreateRequest } from '../../action/listing-actions'

let renderIf = (t, c) => (t ? c : undefined)

let listingDoesExist = false

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
    listingDoesExist = true
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <MuiThemeProvider>
          <form id="listing form" onSubmit={this.handleSubmit}>
            <TextField
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              underlineShow={false}
            />
            <Divider />
            <TextField
              name="listingURL"
              type="text"
              placeholder="Listing URL"
              value={this.state.listingURL}
              onChange={this.handleChange}
              underlineShow={false}
            />
            <Divider />
            <RaisedButton label="Add Listing" fullWidth={true} />
          </form>
        </MuiThemeProvider>
        <ul id="unverified-listings">
          {renderIf(
            listingDoesExist,
            <ListingItem listings={this.props.listings} />
          )}
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
