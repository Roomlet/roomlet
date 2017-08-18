import React from 'react'
import { connect } from 'react-redux'
import { renderIf } from '../../lib/util.js'
import TextField from 'material-ui/TextField'
import AdminListingsItem from '../admin-listing-item'
import * as listingActions from '../../action/listing-actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import LandingContainer from '../landing-container'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'

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
        <LandingContainer />
        <MuiThemeProvider>
          <div>
            <Paper zDepth={2}>
              <Card>
                <CardHeader
                  title="Admin Dashboard"
                  titleStyle={{
                    fontSize: '1.5em',
                    fontWeight: '500',
                    margin: '0 auto',
                  }}
                />
                <CardMedia>
                  <List>
                    <Divider />
                    {this.props.listings.map(listing => {
                      return (
                        <List key={listing._id}>
                          <AdminListingsItem
                            token={this.props.token}
                            listing={listing}
                            listingUpdate={this.props.listingUpdate}
                            listingDelete={this.props.listingDelete}
                          />
                        </List>
                      )
                    })}
                  </List>
                </CardMedia>
              </Card>
            </Paper>
          </div>
        </MuiThemeProvider>
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
