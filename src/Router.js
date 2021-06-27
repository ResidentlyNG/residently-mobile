import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CreateAccount from './screens/authentication/CreateAccount';
import CreatePassword from './screens/authentication/CreatePassword';
import GetStarted from './screens/authentication/GetStarted';
import Invite from './screens/authentication/Invite';
import InviteSuccess from './screens/authentication/InviteSuccess';
import Join from './screens/authentication/Join';
import Login from './screens/authentication/Login';
import SetUp from './screens/authentication/SetUp';
import UserIntro from './screens/authentication/UserIntro';
import Dashboard from './screens/dashboard';
import Bills from './screens/dashboard/bills';
import BillList from './screens/dashboard/bills/BillList';
import CreateBill from './screens/dashboard/bills/CreateBill';
import CustomBill from './screens/dashboard/bills/CustomBill';
import NewBill from './screens/dashboard/bills/NewBill';
import ProcessBill from './screens/dashboard/bills/ProcessBill';
import Intro from './screens/dashboard/Intro';
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
          <Scene key="create_password" component={CreatePassword} />
          <Scene key="user_intro" component={UserIntro} />
          <Scene key="invite" component={Invite} />
          <Scene key="invite_success" component={InviteSuccess} />
          <Scene key="setup" component={SetUp} />
          <Scene key="join" component={Join} />
          <Scene key="intro" component={Intro} />
          <Scene key="dashboard" component={Dashboard} />
          <Scene key="bills" component={Bills} />
          <Scene key="bill_list" component={BillList} />
          <Scene key="new_bill" component={NewBill} />
          <Scene key="custom_bill" component={CustomBill} />
          <Scene key="process_bill" component={ProcessBill} />
          <Scene key="create_bill" component={CreateBill} />
        </Scene>
      </Router>
    );
  }
}
