import moment from 'moment';
import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { profileGroup } from '../../../../assets/images';
import { BoldCross } from '../../../../assets/svgs';
import {
  Button,
  HeaderText,
  ParagraphText,
  PersianGreen,
  RegularText,
  White,
  ScrollView,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import { hp, NairaFormat, wp } from '../../../components/utils';
import NewBill from '../../authentication/SetUp';
import { bills as styles } from './styles';
import { BillGroup } from './utils';

const ButtonPlus = ({ fill }) => (
  <View style={styles.plusView}>
    <BoldCross fill={fill} />
  </View>
);

const getBillSet = (personal, joint) => {
  const set = [];
  const jointBillsFirst = joint.length && joint.length > personal.length;
  const noJointView = !joint.length;

  if (jointBillsFirst) {
    set.push('Joint', 'Personal');
  } else if (noJointView) {
    set.push('Personal');
  } else {
    set.push('Personal', 'Joint');
  }
  return set;
};

class Bills extends Component {
  state = {
    modal: false,
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  render() {
    const { modal } = this.state;
    const { home, profile, bills } = this.props;

    const homeExists = Object.entries(home).length > 0;
    const walletBalance = NairaFormat(home?.account?.balance || 0);
    const userShare = NairaFormat(home?.user_account?.balance || 0);
    const debtSum = profile.debts.length
      ? profile.debts.reduce((total, value) => total + Number(value?.amount))
      : 0;

    const debt = NairaFormat(debtSum);
    const personalBills = bills.filter((bill) => bill?.account_id === null);
    const jointBills = bills.filter((bill) => bill?.account_id !== null);
    const set = getBillSet(personalBills, jointBills);

    return (
      <>
        <StatusBar backgroundColor={White} barStyle="dark-content" />
        <View style={styles.background}>
          <View style={styles.headerGrid}>
            <HeaderText
              title={homeExists ? `${home?.name} Bills` : ''}
              style={styles.headerText}
            />
            {/* {profile.home_id ? (
              <TouchableOpacity onPress={() => Actions.create_bill()}>
                <ButtonPlus />
              </TouchableOpacity>
            ) : (
              <View />
            )} */}
            <View />
          </View>

          {!profile.home_id ? (
            <View style={styles.noHomeView}>
              <RegularText
                title="You have not setup a home yet."
                style={styles.noHome}
              />
              <RegularText
                title="you need to setup a home before you can create a bill."
                style={styles.noHomeSub}
              />
              <Button
                title="Setup your home"
                style={styles.noHomeButton}
                onPress={() => Actions.home_setup()}
              />
            </View>
          ) : (
            <>
              <View style={styles.insightContainer} />
              <View style={styles.walletView}>
                <Image source={profileGroup} style={styles.profileGroup} />
                <RegularText title="Wallet balance" style={styles.walletText} />
                <HeaderText title={walletBalance} style={styles.amount} />
                <View style={styles.divider} />
                <View style={styles.statsGrid}>
                  {/* spent */}
                  <View style={styles.leftGrid}>
                    <View style={styles.outerSpentCircle} />
                    <View style={styles.stats}>
                      <RegularText
                        title="Your share"
                        style={styles.statTitle}
                      />
                      <ParagraphText
                        title={userShare}
                        style={styles.statAmount}
                      />
                    </View>
                  </View>

                  <View style={styles.verticalDivider} />

                  {/* owing balance */}
                  <View style={styles.leftGrid}>
                    <View style={styles.balanceCircle} />
                    <View style={[styles.stats, { marginLeft: wp(13) }]}>
                      <RegularText title="You owe" style={styles.statTitle} />
                      <ParagraphText title={debt} style={styles.statAmount} />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.billsView} />
              <View style={styles.leadRow}>
                <HeaderText title="Your Bills" style={styles.yourBills} />
                <TouchableOpacity
                  style={styles.seeAllButton}
                  onPress={() => Actions.create_bill()}>
                  <ButtonPlus fill={PersianGreen} />
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={styles.scrollContainer}>
                {set.map((type, index) => (
                  <BillGroup
                    key={index}
                    type={type}
                    data={type === 'Personal' ? personalBills : jointBills}
                  />
                ))}
              </ScrollView>
            </>
          )}
        </View>
        <ModalBlur
          visible={modal}
          hasBackdrop
          style={{
            height: hp(678),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: wp(375),
            backgroundColor: White,
            alignSelf: 'center',
            bottom: -hp(25),
          }}
          fixed
          onBackdropPress={() => this.handleChange('modal', false)}
          render={
            <NewBill closeModal={() => this.handleChange('modal', false)} />
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  home: state.profile.home,
  bills: state.bills.bills,
});

export default connect(mapStateToProps)(Bills);
