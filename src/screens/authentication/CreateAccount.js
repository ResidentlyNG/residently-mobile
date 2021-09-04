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
import showToast from '../../components/Toast';
import {
  hp,
  validateEmail,
  validateFullname,
  validatePhone,
} from '../../components/utils';
import { Image } from '../../components/View';
import { createAccountStyles as styles } from './styles';

const CreateAccount = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submit = () => {
    const data = { fullname, email, phone };
    if (!fullname || !validateFullname(fullname))
      showToast('Your Full name is required', 'error');
    else if (!email) showToast('Your email address is required', 'error');
    else if (!validateEmail(email))
      showToast('Your email address is not valid', 'error');
    else if (!phone) showToast('Your phone number is required', 'error');
    else if (!validatePhone(phone))
      showToast('Your phone number is not valid', 'error');
    else Actions.create_password({ data });
  };

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
need some information from you."
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
              value={fullname}
              label="Full name"
              onChangeText={(value) => setFullname(value)}
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
              keyboardType="email-address"
            />
            <TextInput
              icon={<CallSvg />}
              label="Phone Number"
              value={phone}
              onChangeText={(value) => setPhone(value)}
              placeholder="07004562341"
              style={styles.passwordInput}
              keyboardType="phone-pad"
            />
            <ActionButton
              title="Next"
              icon={<ForwardArrow />}
              disabled={true}
              style={styles.button}
              onPress={() => submit()}
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
          Already have an account?{' '}
          <Text onPress={() => Actions.login()} style={styles.signUpText}>
            {' '}
            Login
          </Text>
        </Text>
      </ImageBackground>
    </>
  );
};

export default CreateAccount;
