import React from 'react'
import ProfileSettings from '../profile-settings'
import { Route, BrowserRouter } from 'react-router-dom'
import LandingContainer from '../landing-container'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Roomlet</h1>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/settings" component={ProfileSettings} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
