import React, { useState } from 'react';
import {
  ImageBackground,
  // ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  getStartedBg,
  google,
  twitter,
  facebook,
} from '../../../assets/images';
import { Eye, Mail, MainIcon, User } from '../../../assets/svgs';
import {
  Button,
  MineShaft,
  ParagraphText,
  RegularText,
  TextInput,
} from '../../components';
import { hp, wp } from '../../components/utils';
import { MainView, Image } from '../../components/View';
import { createAccountStyles as styles } from './styles';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const shadowOpt = {
    width: wp(302),
    height: hp(450),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.06,
    x: 0,
    y: 54,
    style: { marginTop: hp(34) },
  };

  return (
    <>
      <StatusBar backgroundColor={MineShaft} barStyle="light-content" />
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
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={hp(52)}>
            <BoxShadow setting={shadowOpt}>
              <View style={styles.loginCard}>
                <ParagraphText
                  title="Create Account"
                  style={styles.createAccount}
                />
                <TextInput
                  icon={<User />}
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  placeholder="Username"
                  style={styles.usernameInput}
                />
                <TextInput
                  icon={<Mail />}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  placeholder="Email Address"
                  style={styles.passwordInput}
                />
                <TextInput
                  icon={<Eye />}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  placeholder="Password"
                  style={styles.passwordInput}
                />
                <TextInput
                  icon={<Eye />}
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                  placeholder="Confirm Password"
                  style={styles.passwordInput}
                />
                <Button title="Sign Up" style={styles.button} />
                {/* <ParagraphText
                title="Forgot Password?"
                style={styles.forgotText}
              /> */}
              </View>
            </BoxShadow>
          </KeyboardAwareScrollView>
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
            Have an account? <Text style={styles.signUpText}> Login</Text>
          </Text>
        </MainView>
      </ImageBackground>
    </>
  );
};

export default CreateAccount;
