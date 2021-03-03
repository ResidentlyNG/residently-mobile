import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import { Button, Green, Image, ParagraphText, White } from '../../components';
import { inviteSuccess as styles } from './styles';
import { userIntroBG, profileGroup } from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import { hp, wp } from '../../components/utils';

const InviteSuccess = () => {
  const shadowOpt = {
    width: wp(338),
    height: hp(534),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.03,
    x: 0,
    y: 54,
    style: { marginTop: hp(154) },
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

        <BoxShadow setting={shadowOpt}>
          <View style={styles.userCard}>
            <Image source={profileGroup} style={styles.profileGroup} />
            <ParagraphText
              title="Your Invites have been sent to your roommates"
              style={styles.inviteMessage}
            />
          </View>
          <Button
            title="Proceed"
            style={styles.button}
            onPress={() => Actions.setup()}
          />
        </BoxShadow>
      </ImageBackground>
    </>
  );
};

export default InviteSuccess;
