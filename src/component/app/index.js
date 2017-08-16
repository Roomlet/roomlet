import React from 'react'
import ProfileSettings from '../profile-settings'
import { Route, BrowserRouter } from 'react-router-dom'
import LandingContainer from '../landing-container'
import DashboardContainer from '../dashboard-container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import AdminDashboard from '../admin-dashboard'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/settings" component={ProfileSettings} />
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/admin" component={AdminDashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
