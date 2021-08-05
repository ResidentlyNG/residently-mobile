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
  AthensGray,
  Green,
  Image,
  ParagraphText,
  RegularText,
  White,
} from '../../components';
import { userInfoStyles as styles } from './styles';
import { host, roomie, userIntroBG } from '../../../assets/images';
import { MainIcon, MiniForwardChevrolet } from '../../../assets/svgs';
import { hp, wp } from '../../components/utils';

const UserIntro = () => {
  const shadowOpt = {
    width: wp(338),
    height: hp(514),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.03,
    x: 0,
    y: 54,
    style: { marginTop: hp(34) },
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
        <ParagraphText
          title="What would you be signing up as?"
          style={styles.leadText}
        />
        <BoxShadow setting={shadowOpt}>
          <View style={styles.userCard}>
            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => Actions.invite()}>
              <View style={styles.cardRow}>
                <Image source={host} style={styles.host} />
                <View>
                  <ParagraphText title="Become a Host" style={styles.title} />
                  <RegularText
                    title="Someone who needs a roommate"
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
                { borderColor: AthensGray, marginTop: hp(20) },
              ]}
              onPress={() => Actions.join()}>
              <View style={styles.cardRow}>
                <Image source={roomie} style={styles.host} />
                <View>
                  <ParagraphText
                    title="Join as a roommate"
                    style={styles.title}
                  />
                  <RegularText
                    title="Looking for roommates to get an apartment"
                    style={styles.detail}
                  />
                </View>
                <View style={[styles.arrowBox, { backgroundColor: Green }]}>
                  <MiniForwardChevrolet />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <ParagraphText title="Please Note:" style={styles.noteLead} />
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Mauris vitae gravida erat, in vehicula augue. Sed vitae rhoncus odio."
            style={styles.note}
          />
        </BoxShadow>
      </ImageBackground>
    </>
  );
};

export default UserIntro;
