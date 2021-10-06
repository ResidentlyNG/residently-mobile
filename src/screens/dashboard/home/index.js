import React, { Component } from 'react';
import {
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  BillIcon,
  Button,
  ButtonWithIcon,
  DodgerBlue,
  HeaderText,
  Image,
  ParagraphText,
  PersianGreen,
  RegularText,
  SemiBoldText,
  TimeBadge,
  WhiteLilac,
} from '../../../components';
import {
  doMore,
  profileGroup,
  flashBill,
  homeOwner,
  roomieZoomed,
  homeBg,
  moneyBagBig,
  houseExpensesBg,
} from '../../../../assets/images';
import { home as styles } from './styles';
import { Cross, ForwardArrow, NotificationBell } from '../../../../assets/svgs';
import { hp, NairaFormat, wp } from '../../../components/utils';
import { getHome } from '../../../store/actions/profile';
import { getTransactions } from '../../../store/actions/transactions';
import { getWallet } from '../../../store/actions/wallet';
import { getBills } from '../../../store/actions/bills';

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross fill={DodgerBlue} />
  </View>
);

const BillItem = ({ data }) => {
  const { title } = data;
  const amount = NairaFormat(data.amount);
  // const icon = title.includes('Electricity') ? flashBill

  return (
    <TouchableOpacity
      style={styles.billItem}
      onPress={() => Actions.bill({ data })}>
      <View style={styles.billRow}>
        <BillIcon icon={<Image source={flashBill} style={styles.billIcon} />} />
        <View style={styles.billBlock}>
          <ParagraphText title={title} style={styles.billTitle} />
          <HeaderText title={amount} style={styles.billAmount} />
        </View>
      </View>
      <View style={styles.amountRow}>
        <TimeBadge />
      </View>
    </TouchableOpacity>
  );
};

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
    this.props.getWallet();
    this.props.getBills();
    this.props.getTransactions();
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
        <StatusBar backgroundColor={WhiteLilac} barStyle="dark-content" />
        <ImageBackground
          style={styles.background}
          source={homeBg}
          imageStyle={styles.imageBg}
          resizeMode="stretch">
          <View style={styles.headerGrid}>
            <View />
            {/* <TouchableOpacity
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
            </View> */}
            <View style={styles.bell}>
              <NotificationBell />
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            // style={styles.scroll}
            showsVerticalScrollIndicator={false}>
            <View style={styles.coliving}>
              <ParagraphText title="Welcome back!" style={styles.welcome} />
              <SemiBoldText
                title={'Happily Thriving Together \nFocus on the Fun!'}
                style={styles.colivingText}
              />
              {/* <TouchableOpacity style={styles.readMore}>
                  <ParagraphText
                    title="Read More"
                    style={styles.readMoreText}
                  />
                </TouchableOpacity> */}
              <Image source={doMore} style={styles.doMore} resizeMode="cover" />
            </View>

            <ImageBackground
              style={styles.expensesBackground}
              source={houseExpensesBg}
              imageStyle={styles.expensesImageBg}
              resizeMode="stretch">
              <View style={{ alignItems: 'center' }}>
                <HeaderText
                  title="Your Expenses"
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
                                title="Upcoming expenses"
                                style={styles.yourBills}
                              />
                              <TouchableOpacity
                                style={styles.seeAllButton}
                                onPress={() => Actions.bill_list()}>
                                <RegularText
                                  title="See All"
                                  style={styles.seeAll}
                                />
                                <ForwardArrow fill={PersianGreen} />
                              </TouchableOpacity>
                            </View>
                            {bills.slice(0, 3).map((bill) => (
                              <BillItem key={bill.id} data={bill} />
                            ))}
                            {/* <BillItem icon={flashBill} />
                          <BillItem icon={houseBill} />
                          <BillItem icon={cable} /> */}
                          </>
                        ) : (
                          <NoBills />
                        )}
                      </>
                    )}
                  </View>
                </BoxShadow>

                {profile.home_id ? (
                  <TouchableOpacity
                    style={styles.topupView}
                    activeOpacity={0.4}
                    onPress={() => Actions.select_wallet()}>
                    <View>
                      <SemiBoldText
                        title="Top up your wallet"
                        style={styles.topupText}
                      />
                      <RegularText
                        title="Pay your bills in a splash"
                        style={styles.topupSubText}
                      />
                    </View>
                    <Image source={moneyBagBig} style={styles.moneyBagBig} />
                  </TouchableOpacity>
                ) : (
                  <View />
                )}
                {/* <ParagraphText
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
              </View> */}
                <HeaderText title="More Vibes" style={styles.houseExpenses} />
                <ScrollView
                  style={styles.moreToComeView}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <View>
                    <View style={styles.viewCard}>
                      <Image source={roomieZoomed} style={styles.roomie} />
                    </View>
                    <ParagraphText
                      title="Create a Goal"
                      style={styles.roomieText}
                    />
                    <RegularText
                      title="Ready to add spice? Contribute towards a new sofa or video game"
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
              </View>
            </ImageBackground>
          </ScrollView>
        </ImageBackground>
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
  getTransactions,
  getWallet,
  getBills,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
