import React, { Component } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  BillIcon,
  Button,
  ButtonWithIcon,
  Coral,
  DodgerBlue,
  HeaderText,
  Image,
  ParagraphText,
  RegularText,
  SemiBoldText,
  TimeBadge,
  White,
} from '../../../components';
import {
  user,
  apartment,
  doMore,
  profileGroup,
  flashBill,
  houseBill,
  cable,
  liveAnywhere,
  homeOwner,
  roomieZoomed,
  // bills,
} from '../../../../assets/images';
import { home as styles } from './styles';
import { Cross, NotificationBell } from '../../../../assets/svgs';
import { hp, wp } from '../../../components/utils';
import { getHome } from '../../../store/actions/profile';

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross fill={DodgerBlue} />
  </View>
);

const BillItem = ({ icon }) => (
  <View style={styles.billItem}>
    <View style={styles.billRow}>
      <BillIcon icon={<Image source={icon} style={styles.billIcon} />} />
      <View style={styles.billBlock}>
        <ParagraphText title="Electricity Bill" style={styles.billTitle} />
        <HeaderText title="₦ 2,000.00" style={styles.billAmount} />
      </View>
    </View>
    <View style={styles.amountRow}>
      <TimeBadge />
    </View>
  </View>
);

const NoBills = () => (
  <View style={styles.noBillCard}>
    <ParagraphText title="You have no bill" style={styles.noBillLeadText} />
    <RegularText
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. "
      style={styles.noBillText}
    />
    <ButtonWithIcon
      title="Add a new bill"
      icon={<ButtonPlus />}
      style={styles.newBillButton}
      onPress={() => Actions.create_bill()}
      // titleStyle={styles.buttonTitle}
      left
      flex
    />
  </View>
);

class Home extends Component {
  componentDidMount() {
    this.props.getHome();
  }

  shadowOpt = {
    width: wp(339),
    height: hp(440),
    color: '#000',
    // border: 2,
    radius: 24,
    opacity: 0.02,
    x: 0,
    y: 54,
    // style: { alignItems: 'center' },
    style: {
      alignItems: 'center',
      marginTop: -hp(20),
      marginBottom: hp(50),
    }, //  marginTop: hp(15) }
  };

  render() {
    const { profile, home, bills } = this.props;
    const hasHome = profile.home_id;
    const billCount = bills.length === 1 ? '1 bill' : `${bills.length} bills`;

    return (
      <>
        <StatusBar backgroundColor={White} barStyle="dark-content" />
        <View style={styles.background}>
          <View style={styles.headerGrid}>
            <TouchableOpacity
              onPress={() => Actions.settings()}
              activeOpacity={0.2}>
              <Image source={user} style={styles.profileImage} />
            </TouchableOpacity>
            <View style={styles.usernameView}>
              <ParagraphText title={profile.fullname} style={styles.fullname} />
              <RegularText
                title={`@${profile.username}`}
                style={styles.username}
              />
            </View>
            <View style={styles.bell}>
              <NotificationBell />
            </View>
          </View>

          <View style={{ height: hp(670) }}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              // style={styles.scroll}
              showsVerticalScrollIndicator={false}>
              <View style={styles.coliving}>
                <ParagraphText title="Welcome back" style={styles.welcome} />
                <SemiBoldText
                  title="Co-living made easy, do more with Residently"
                  style={styles.colivingText}
                />
                <TouchableOpacity style={styles.readMore}>
                  <ParagraphText
                    title="Read More"
                    style={styles.readMoreText}
                  />
                </TouchableOpacity>
                <Image source={doMore} style={styles.doMore} />
              </View>

              <ParagraphText
                title="Your House Expenses"
                style={styles.houseExpenses}
              />

              <BoxShadow setting={this.shadowOpt}>
                <View style={styles.expenseBlock}>
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
                        style={styles.button}
                        onPress={() => Actions.home_setup()}
                      />
                    </View>
                  ) : (
                    <>
                      <View style={styles.blockView}>
                        <View>
                          <ParagraphText
                            title={hasHome ? home.name : ''}
                            style={styles.blockRoom}
                          />
                          <RegularText
                            title={`💵 ${billCount} created`}
                            style={styles.billsCount}
                          />
                        </View>
                        <Image
                          source={profileGroup}
                          style={styles.profileGroup}
                        />
                      </View>

                      {bills.length ? (
                        <>
                          <View style={styles.leadRow}>
                            <ParagraphText
                              title="Your Bills"
                              style={styles.yourBills}
                            />
                            <TouchableOpacity
                              style={styles.seeAllButton}
                              onPress={() => Actions.bill_list()}>
                              <RegularText
                                title="See All"
                                style={styles.seeAll}
                              />
                            </TouchableOpacity>
                          </View>
                          <BillItem icon={flashBill} />
                          <BillItem icon={houseBill} />
                          <BillItem icon={cable} />
                        </>
                      ) : (
                        <NoBills />
                      )}
                    </>
                  )}
                </View>
              </BoxShadow>
              <ParagraphText
                title="Live anywhere"
                style={styles.houseExpenses}
              />
              <View style={styles.miniWrapper}>
                <View style={styles.minisBgContainer}>
                  <Image
                    source={liveAnywhere}
                    style={styles.minisBg}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.miniImageContainer}>
                  <Image source={apartment} style={styles.miniImage} />
                </View>
                <SemiBoldText
                  title="Co-living made easy, do more with Residently"
                  style={styles.colivingText}
                />
                <TouchableOpacity
                  style={[styles.readMore, { backgroundColor: Coral }]}>
                  <ParagraphText
                    title="Read More"
                    style={styles.readMoreText}
                  />
                </TouchableOpacity>
              </View>
              <ParagraphText
                title="More to come"
                style={styles.houseExpenses}
              />
              <ScrollView
                style={styles.moreToComeView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <View>
                  <View style={styles.viewCard}>
                    <Image source={roomieZoomed} style={styles.roomie} />
                  </View>
                  <ParagraphText
                    title="Find A Roomie"
                    style={styles.roomieText}
                  />
                  <RegularText
                    title="Ready to get that place then browse"
                    style={styles.roomieSubText}
                  />
                </View>
                <View>
                  <View style={styles.viewCard}>
                    <Image source={homeOwner} style={styles.homeOwner} />
                  </View>
                  <ParagraphText
                    title="Become a home owner"
                    style={styles.roomieText}
                  />
                  <RegularText
                    title="Ready to get that place then browse"
                    style={styles.roomieSubText}
                  />
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  home: state.profile.home,
  bills: state.bills.bills,
});

const mapDispatchToProps = {
  getHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
