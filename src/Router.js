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
import Bill from './screens/dashboard/bills/Bill';
import BillList from './screens/dashboard/bills/BillList';
import CreateBill from './screens/dashboard/bills/create';
import CustomBill from './screens/dashboard/bills/CustomBill';
import NewBill from './screens/dashboard/bills/NewBill';
import ProcessBill from './screens/dashboard/bills/ProcessBill';
import Intro from './screens/dashboard/Intro';
import Settings from './screens/dashboard/settings';
import Transactions from './screens/dashboard/wallet/Transactions';
import Onboarding from './screens/onboarding';
import Personal from './screens/dashboard/settings/Personal';
import MyHome from './screens/dashboard/settings/MyHome';
import HomeSetup from './screens/dashboard/home/setup';
import CribInvite from './screens/dashboard/home/setup/Invite';
import Launch from './screens/onboarding/Launch';
import { checkAuth } from './utils';
import Host from './screens/dashboard/home/setup/Host';
import Success from './screens/dashboard/home/setup/Success';
import Roommate from './screens/dashboard/home/setup/Roommate';
import JoinRoom from './screens/dashboard/home/setup/JoinRoom';
import NameBill from './screens/dashboard/bills/create/NameBill';
import SelectPlan from './screens/dashboard/bills/create/SelectPlan';
import Duration from './screens/dashboard/bills/create/Duration';
import SelectRecipient from './screens/dashboard/bills/create/SelectRecipient';
import SettlementAccount from './screens/dashboard/bills/create/SettlementAccount';
import SelectWallet from './screens/dashboard/wallet/fund';
import FundWallet from './screens/dashboard/wallet/fund/FundWallet';
import Web from './components/Webview';
import Card from './screens/dashboard/settings/payments/Card';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene
            key="launch"
            component={Launch}
            on={() => checkAuth()}
            success="login"
            failure="onboarding"
            initial
          />
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
          <Scene key="bill" component={Bill} />
          <Scene key="transactions" component={Transactions} />

          <Scene key="settings" component={Settings} />
          <Scene key="personal" component={Personal} />
          <Scene key="my_home" component={MyHome} />
          <Scene key="home_setup" component={HomeSetup} />
          <Scene key="host" component={Host} />
          <Scene key="crib_invite" component={CribInvite} />
          <Scene key="setup_success" component={Success} />
          <Scene key="roommate" component={Roommate} />
          <Scene key="join_room" component={JoinRoom} />
          <Scene key="name_bill" component={NameBill} />
          <Scene key="select_plan" component={SelectPlan} />
          <Scene key="duration" component={Duration} />
          <Scene key="select_recipient" component={SelectRecipient} />
          <Scene key="settlement" component={SettlementAccount} />

          <Scene key="select_wallet" component={SelectWallet} />
          <Scene key="fund_wallet" component={FundWallet} />
          <Scene key="webview" component={Web} />

          <Scene key="card" component={Card} />
        </Scene>
      </Router>
    );
  }
}
