import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CreateAccount from './screens/authentication/CreateAccount';
import GetStarted from './screens/authentication/GetStarted';
import Login from './screens/authentication/Login';
import UserIntro from './screens/authentication/UserIntro';
import Onboarding from './screens/onboarding';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          {/* <Scene
            key="launch"
            component={Launch}
            on={() => checkAuth()}
            success="sign_in"
            failure="onboarding"
            initial
          /> */}
          <Scene key="onboarding" component={Onboarding} />
          <Scene key="get_started" component={GetStarted} />
          <Scene key="login" component={Login} />
          <Scene key="create_account" component={CreateAccount} />
          <Scene key="user_intro" component={UserIntro} />
        </Scene>
      </Router>
    );
  }
}
