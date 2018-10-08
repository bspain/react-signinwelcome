import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInPage from './signup/SignUpPage';
import WelcomePage from './welcome/WelcomePage';

class App extends Component {
  render() 
  {
      return (
          <div className="container-fluid">
            <Switch>
              <Route path="/welcome" component={WelcomePage} />
              <Route component={SignInPage} />
            </Switch>
          </div>
      );
  }
}

export default App;
