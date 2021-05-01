import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import {
  ActionButton,
  ClearDay,
  Coral,
  Green,
  Image,
  ParagraphText,
  RegularText,
  White,
} from '../../../components';
import {
  user,
  billsBg,
  handHeart,
  apartment,
  twoRoommates,
} from '../../../../assets/images';
import { home as styles } from './styles';
import { ForwardArrow, NotificationBell } from '../../../../assets/svgs';
import { hp, wp } from '../../../components/utils';

export default class Home extends Component {
  shadowOpt = {
    width: wp(375),
    height: hp(780),
    color: '#000',
    // border: 2,
    radius: 34,
    opacity: 0.02,
    x: 0,
    y: 54,
    style: { zIndex: -33, position: 'absolute', bottom: 0 }, //  marginTop: hp(15) }
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

          <BoxShadow setting={this.shadowOpt}>
            <View style={styles.mainView}>
              <View style={styles.billContainer}>
                <View style={styles.billWrapper}>
                  <View style={styles.billsBgContainer}>
                    <Image
                      source={billsBg}
                      style={styles.billsBg}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.heartHandWrapper}>
                    <View style={styles.heartHandContainer}>
                      <Image source={handHeart} style={styles.handHeart} />
                    </View>
                  </View>
                  <ParagraphText
                    title="Split & Pay Bills"
                    style={styles.billsLeadText}
                  />
                  <RegularText
                    title="To create your account we would need some information from you."
                    style={styles.billsText}
                  />
                  <ActionButton
                    title="Get Started"
                    icon={<ForwardArrow />}
                    style={styles.billsButton}
                  />
                </View>
              </View>

              <View style={styles.bottomRow}>
                <View style={styles.miniContainer}>
                  <View style={styles.miniWrapper}>
                    <View style={styles.minisBgContainer}>
                      <Image
                        source={billsBg}
                        style={styles.minisBg}
                        // resizeMode="cover"
                      />
                    </View>
                    <View style={styles.miniImageWrapper}>
                      <View style={styles.miniImageContainer}>
                        <Image source={apartment} style={styles.miniImage} />
                      </View>
                    </View>
                    <ParagraphText
                      title="Find an apartment"
                      style={styles.miniLeadText}
                    />
                    <View style={styles.arrowView}>
                      <ForwardArrow fill={Coral} />
                    </View>
                  </View>
                </View>

                <View style={styles.miniContainer}>
                  <View
                    style={[styles.miniWrapper, { backgroundColor: ClearDay }]}>
                    <View style={styles.minisBgContainer}>
                      <Image
                        source={billsBg}
                        style={styles.minisBg}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.miniImageWrapper}>
                      <View
                        style={[
                          styles.miniImageContainer,
                          { backgroundColor: Green },
                        ]}>
                        <Image source={twoRoommates} style={styles.miniImage} />
                      </View>
                    </View>
                    <ParagraphText
                      title={'Find a \nRoomate'}
                      style={styles.miniLeadText}
                    />
                    <View style={styles.arrowView}>
                      <ForwardArrow fill={Green} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </BoxShadow>
        </View>
      </>
    );
  }
}
