import React from 'react'
import { connect } from 'react-redux'
import * as listingActions from '../../action/listing-actions.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import Paper from 'material-ui/Paper'

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
              <MuiThemeProvider>
                <Paper zDepth={2} style={{ marginTop: 10 }}>
                  <List style={{ textAlign: 'left' }}>
                    <ListItem
                      key={listing._id}
                      primaryText={listing.name}
                      secondaryText={listing.listingURL}
                      rightIconButton={
                        <FloatingActionButton
                          onClick={() => this.props.listingDelete(listing)}
                          mini={true}
                          backgroundColor="red"
                          style={{ marginRight: 20 }}
                        >
                          <DeleteIcon />
                        </FloatingActionButton>
                      }
                    />
                  </List>
                </Paper>
              </MuiThemeProvider>

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
