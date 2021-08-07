import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
// import { Actions } from 'react-native-router-flux';
import {
  facebook,
  getStartedBg,
  google,
  thumbBg,
  twitter,
} from '../../../assets/images';
import { EyeSvg, MailSvg, MainIcon } from '../../../assets/svgs';
import {
  Button,
  Green,
  ParagraphText,
  RegularText,
  TextInput,
} from '../../components';
import { hp } from '../../components/utils';
import { Image } from '../../components/View';
// import api from '../../utils/api';
import { loginStyles as styles } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const submit = () =>
  //   api('/login', 'POST', {
  //     email: 'eazzylee@yopmail.com',
  //     password: 'Password',
  //   }).then((res) => console.log('rss', res));
  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={getStartedBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={{ position: 'absolute', marginTop: hp(24) }}>
          <Image source={thumbBg} style={styles.thumbBg} />
        </View>
        <View style={styles.mainView}>
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: 'center' }}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            extraScrollHeight={hp(52)}>
            <View style={styles.iconView}>
              <MainIcon fill={Green} />
            </View>
            <ParagraphText title="Login" style={styles.header} />
            <TextInput
              value={email}
              label="Email"
              placeholder="Your email address"
              icon={<MailSvg />}
              onChangeText={(value) => setEmail(value)}
              style={{ marginTop: hp(36) }}
            />
            <TextInput
              value={password}
              label="Password"
              placeholder="Your password"
              icon={<EyeSvg />}
              onChangeText={(value) => setPassword(value)}
              style={{ marginTop: hp(20) }}
            />
            <Button
              title="Login"
              style={styles.button}
              onPress={() => Actions.intro({ type: 'reset' })}
            />
            <RegularText title="Forgot Password?" style={styles.forgotText} />
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
          </KeyboardAwareScrollView>
        </View>
        {/* </ImageBackground> */}
      </ImageBackground>
    </>
  );
};

export default Login;
