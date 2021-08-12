import React from 'react';
import {
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import {
  Green,
  Image,
  ParagraphText,
  RegularText,
  White,
  WoodSmoke,
} from '../../../../components';
import { userInfoStyles as styles } from './styles';
import { host, roomie, userIntroBG } from '../../../../../assets/images';
import { MainIcon, MiniForwardChevrolet } from '../../../../../assets/svgs';
import { hp, wp } from '../../../../components/utils';

const HomeSetup = () => {
  const shadowOpt = {
    width: wp(338),
    height: hp(514),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.03,
    x: 0,
    y: 54,
    style: { marginTop: hp(14) },
  };
  return (
    <>
      <StatusBar backgroundColor={White} barStyle="dark-content" />
      <ImageBackground
        style={styles.background}
        source={userIntroBG}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.mainIcon}>
          <MainIcon fill={Green} />
        </View>
        <ParagraphText title="Let's set up your home" style={styles.leadText} />
        <BoxShadow setting={shadowOpt}>
          <View style={styles.userCard}>
            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => Actions.invite()}>
              <View style={styles.cardRow}>
                <Image source={host} style={styles.host} />
                <View>
                  <ParagraphText
                    title="Are you creating a new home with others?"
                    style={styles.title}
                  />
                  <ParagraphText
                    title="(Become a Host)"
                    style={styles.detail}
                  />
                </View>
                <View style={styles.arrowBox}>
                  <MiniForwardChevrolet />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roleCard,
                { borderColor: Green, marginTop: hp(20) },
              ]}
              onPress={() => Actions.join()}>
              <View style={styles.cardRow}>
                <Image source={roomie} style={styles.host} />
                <View>
                  <ParagraphText
                    title="Are you joining an existing home?"
                    style={styles.title}
                  />
                  <ParagraphText
                    title="(roommate)"
                    style={[styles.detail, { color: Green }]}
                  />
                </View>
                <View style={[styles.arrowBox, { backgroundColor: Green }]}>
                  <MiniForwardChevrolet />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roleCard,
                { borderColor: WoodSmoke, marginTop: hp(20) },
              ]}
              onPress={() => Actions.join()}>
              <View style={styles.cardRow}>
                <Image source={roomie} style={styles.host} />
                <View>
                  <ParagraphText
                    title="Are you creating your personal home?"
                    style={styles.title}
                  />
                  <RegularText title="(You live alone)" style={styles.detail} />
                </View>
                <View style={[styles.arrowBox, { backgroundColor: WoodSmoke }]}>
                  <MiniForwardChevrolet />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </BoxShadow>
      </ImageBackground>
    </>
  );
};

export default HomeSetup;
