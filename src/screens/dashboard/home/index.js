import React, { Component } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import {
  BillIcon,
  Coral,
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
} from '../../../../assets/images';
import { home as styles } from './styles';
import { NotificationBell } from '../../../../assets/svgs';
import { hp, wp } from '../../../components/utils';

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

export default class Home extends Component {
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
    return (
      <>
        <StatusBar backgroundColor={White} barStyle="dark-content" />
        <View style={styles.background}>
          <View style={styles.headerGrid}>
            <Image source={user} style={styles.profileImage} />
            <View style={styles.usernameView}>
              <ParagraphText title="Bisola Jabari" style={styles.fullname} />
              <RegularText title="@Bisijabari" style={styles.username} />
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
                  <View style={styles.blockView}>
                    <View>
                      <ParagraphText
                        title="BLOCK 5A Room"
                        style={styles.blockRoom}
                      />
                      <RegularText
                        title="💵 12 Bills created"
                        style={styles.billsCount}
                      />
                    </View>
                    <Image source={profileGroup} style={styles.profileGroup} />
                  </View>

                  <View style={styles.leadRow}>
                    <ParagraphText
                      title="Your Bills"
                      style={styles.yourBills}
                    />
                    <TouchableOpacity
                      style={styles.seeAllButton}
                      onPress={() => Actions.bill_list()}>
                      <RegularText title="See All" style={styles.seeAll} />
                    </TouchableOpacity>
                  </View>
                  <BillItem icon={flashBill} />
                  <BillItem icon={houseBill} />
                  <BillItem icon={cable} />
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
