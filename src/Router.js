import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import GetStarted from './screens/authentication/GetStarted';
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
        </Scene>
      </Router>
    );
  }
}
