import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  ClearDay,
  Coral,
  DodgerBlue,
  Green,
  Image,
  ParagraphText,
  RegularText,
  White,
} from '../../components';
import {
  billsBg,
  handHeart,
  apartment,
  twoRoommates,
} from '../../../assets/images';
import { intro as styles } from './styles';
import { ForwardArrow } from '../../../assets/svgs';
import { hp, wp } from '../../components/utils';

export default class Intro extends Component {
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
          <ParagraphText
            title="What would you be using Residently for?"
            style={styles.headerText}
          />
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
            <TouchableOpacity
              onPress={() => Actions.home_setup({ type: 'reset' })}
              style={styles.billsView}>
              <ParagraphText
                title="Pay household bills"
                style={styles.billsLeadText}
              />
              <View style={styles.arrowIcon}>
                <ForwardArrow fill={DodgerBlue} />
              </View>
            </TouchableOpacity>
            <RegularText
              title="To create your account we would need some information from you."
              style={styles.billsText}
            />
          </View>

          <View style={styles.bottomRow}>
            {/* <View style={styles.miniContainer}> */}
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
            {/* </View> */}

            {/* <View style={styles.miniContainer}> */}
            <View style={[styles.miniWrapper, { backgroundColor: ClearDay }]}>
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
            {/* </View> */}
          </View>
          <TouchableOpacity
            style={styles.vibes}
            onPress={() => Actions.dashboard({ type: 'reset' })}>
            <ParagraphText title="Just Vibes  💛" style={styles.vibesText} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
