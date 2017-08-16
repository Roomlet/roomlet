import React from 'react'
import { connect } from 'react-redux'
import { listingCreate } from '../../action/listing-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

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

    this.state.listingCreatedOn = new Date()

    this.props.listingCreate(this.state)

    this.setState({ listingURL: '' })
    this.setState({ name: '' })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <MuiThemeProvider>
          <Paper zDepth={2}>
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
              <RaisedButton fullWidth={true} label="Add Listing" />
            </form>
          </Paper>
        </MuiThemeProvider>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  profile: state,
})

export const mapDispatchToProps = dispatch => ({
  listingCreate: listing => dispatch(listingCreate(listing)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)
