import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CreateAccount from './screens/authentication/CreateAccount';
import GetStarted from './screens/authentication/GetStarted';
import Invite from './screens/authentication/Invite';
import InviteSuccess from './screens/authentication/InviteSuccess';
import Join from './screens/authentication/Join';
import Login from './screens/authentication/Login';
import SetUp from './screens/authentication/SetUp';
import UserIntro from './screens/authentication/UserIntro';
import Dashboard from './screens/dashboard';
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
          <Scene key="invite" component={Invite} />
          <Scene key="invite_success" component={InviteSuccess} />
          <Scene key="setup" component={SetUp} />
          <Scene key="join" component={Join} />
          <Scene key="dashboard" component={Dashboard} />
        </Scene>
      </Router>
    );
  }
}
