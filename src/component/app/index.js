import React from 'react'
import ProfileSettings from '../profile-settings'
import { Route, BrowserRouter } from 'react-router-dom'
import LandingContainer from '../landing-container'
import DashboardContainer from '../dashboard-container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider>
          <AppBar
            title="Roomlet"
            style={{ backgroundColor: '#3AB08F', fontFamily: 'Libre Franklin' }}
          />
        </MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/settings" component={ProfileSettings} />
            <Route exact path="/dashboard" component={DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
