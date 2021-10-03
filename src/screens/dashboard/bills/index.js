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
import { hp, wp } from '../../../components/utils';
import NewBill from '../../authentication/SetUp';
import { bills as styles } from './styles';
import { BillGroup } from './utils';

const ButtonPlus = ({ fill }) => (
  <View style={styles.plusView}>
    <BoldCross fill={fill} />
  </View>
);

class Bills extends Component {
  state = {
    selected: 'shortTerm',
    modal: false,
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  render() {
    const { modal, selected } = this.state;
    const { home, profile } = this.props;
    console.log('pr', profile);

    return (
      <>
        <StatusBar backgroundColor={White} barStyle="dark-content" />
        <View style={styles.background}>
          <View style={styles.headerGrid}>
            <HeaderText
              title={`${home?.name} Bills`}
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
                <HeaderText title="₦ 350,000.00" style={styles.amount} />
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
                        title="₦ 350,000.00"
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
                      <ParagraphText
                        title="₦ 350,000.00"
                        style={styles.statAmount}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.billsView} />
              <View style={styles.leadRow}>
                <HeaderText title="Your Bills" style={styles.yourBills} />
                <TouchableOpacity
                  style={styles.seeAllButton}
                  onPress={() => Actions.bill_list()}>
                  <ButtonPlus fill={PersianGreen} />
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={styles.scrollContainer}>
                <BillGroup type="Personal" />
                <BillGroup type="Joint" />
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
});

export default connect(mapStateToProps)(Bills);
