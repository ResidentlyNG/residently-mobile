import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  facebook,
  getStartedBg,
  google,
  thumbBg,
  twitter,
} from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import {
  Button,
  Green,
  ParagraphText,
  RegularText,
  SemiBoldText,
} from '../../components';
import { hp } from '../../components/utils';
import { Image } from '../../components/View';
import { getStartedStyles as styles } from './styles';

const GetStarted = () => {
  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={getStartedBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.top}>
          <MainIcon />
          <SemiBoldText title="Welcome Back!" style={styles.welcome} />
          <RegularText
            title="Good to have you here, if this is your first time, proceed to create an account by tapping the Sign up button. If you already have an account, then sign in!"
            style={styles.subText}
          />
        </View>
        {/* <ImageBackground
          style={styles.thumbBackground}
          source={thumbBg}
          imageStyle={styles.thumbBg}
          resizeMode="contain"> */}
        <View style={{ position: 'absolute', marginTop: hp(253) }}>
          <Image source={thumbBg} style={styles.thumbBg} />
        </View>
        <View style={styles.mainView}>
          <ParagraphText title="Already a user?" style={styles.header} />
          <Button
            title="Login to your account"
            style={styles.button}
            onPress={() => Actions.login()}
          />
          <View style={styles.socialsCard}>
            <RegularText
              title="Use Socials to login"
              style={styles.socialsText}
            />
            <View style={styles.socialsGroup}>
              <TouchableOpacity style={styles.socialsCircle}>
                <Image source={google} style={styles.google} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialsCircle}>
                <Image source={facebook} style={styles.facebook} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialsCircle}>
                <Image source={twitter} style={styles.twitter} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.bottomText}>
            Don't have an account?{' '}
            <Text
              style={styles.signUpText}
              onPress={() => Actions.create_account()}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </View>
      </ImageBackground>
      {/* </ImageBackground> */}
    </>
  );
};

export default GetStarted;
