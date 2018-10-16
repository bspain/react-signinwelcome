import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignInPage from './signup/SignUpPage';
import WelcomePage from './welcome/WelcomePage';

class App extends Component {
  render() 
  {
    // BUG: Non default route for signUp
      return (
          <div className="container-fluid">
            <Route path="/signUp" component={SignInPage} />
            <Route path="/welcome" component={WelcomePage} />
          </div>
      );
  }
}

export default App;
