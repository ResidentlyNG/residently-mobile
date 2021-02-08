import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BoxShadow } from 'react-native-shadow';
import {
  getStartedBg,
  google,
  twitter,
  facebook,
} from '../../../assets/images';
import { Eye, MainIcon, User } from '../../../assets/svgs';
import {
  Button,
  Green,
  ParagraphText,
  RegularText,
  TextInput,
} from '../../components';
import { hp, wp } from '../../components/utils';
import { MainView, Image } from '../../components/View';
import { loginStyles as styles } from './styles';

const Login = () => {
  const shadowOpt = {
    width: wp(302),
    height: hp(386),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.06,
    x: 0,
    y: 24,
    style: { marginTop: hp(80) },
  };

  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={getStartedBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.topRow}>
          <MainIcon />
          <ParagraphText title="Residently" style={styles.header} />
        </View>
        <MainView style={styles.mainView}>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.loginCard}>
              <ParagraphText title="Login" style={styles.login} />
              <TextInput
                icon={<User />}
                value=""
                placeholder="Username"
                style={styles.usernameInput}
              />
              <TextInput
                icon={<Eye />}
                value=""
                placeholder="Password"
                style={styles.passwordInput}
              />
              <Button title="Login" style={styles.button} />
              <ParagraphText
                title="Forgot Password?"
                style={styles.forgotText}
              />
            </View>
          </BoxShadow>
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
            Have an account?{' '}
            <Text
              style={styles.signUpText}
              onPress={() => Actions.create_account()}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </MainView>
      </ImageBackground>
    </>
  );
};

export default Login;
