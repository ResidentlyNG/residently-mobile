import React, { useState } from 'react';
import {
  ImageBackground,
  // ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import {
  getStartedBg,
  google,
  twitter,
  facebook,
} from '../../../assets/images';
import {
  CallSvg,
  ForwardArrow,
  MailSvg,
  MainIcon,
  UserSvg,
} from '../../../assets/svgs';
import {
  ActionButton,
  HeaderText,
  MineShaft,
  RegularText,
  TextInput,
} from '../../components';
import { hp } from '../../components/utils';
import { Image } from '../../components/View';
import { createAccountStyles as styles } from './styles';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <StatusBar backgroundColor={MineShaft} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={getStartedBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={[styles.top, { marginTop: hp(20) }]}>
          <MainIcon />
          <HeaderText
            title="Create your Account"
            style={styles.createAccount}
          />
          <RegularText
            title="To create your account we would
need few information from you."
            style={styles.header}
          />
        </View>
        <View style={styles.mainView}>
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: 'center' }}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={hp(52)}>
            <TextInput
              icon={<UserSvg />}
              value={username}
              label="Full name"
              onChangeText={(value) => setUsername(value)}
              placeholder="Your full name"
              style={styles.usernameInput}
            />
            <TextInput
              icon={<MailSvg />}
              value={email}
              label="Email Address"
              onChangeText={(value) => setEmail(value)}
              placeholder="Your email address"
              style={styles.passwordInput}
            />
            <TextInput
              icon={<CallSvg />}
              label="Phone Number"
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Your phone number"
              style={styles.passwordInput}
            />
            <ActionButton
              title="Next"
              icon={<ForwardArrow />}
              style={styles.button}
              onPress={() => Actions.create_password()}
            />
            <View style={styles.socialsCard}>
              <RegularText
                title="Use Socials to sign up"
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
          </KeyboardAwareScrollView>
        </View>
        <Text style={styles.bottomText}>
          Already have an account? <Text style={styles.signUpText}> Login</Text>
        </Text>
      </ImageBackground>
    </>
  );
};

export default CreateAccount;
