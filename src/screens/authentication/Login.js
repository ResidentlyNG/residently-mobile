import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
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
import showToast from '../../components/Toast';
import { hp, validateEmail } from '../../components/utils';
import { Image } from '../../components/View';
// import api from '../../utils/api';
import { loginStyles as styles } from './styles';
import { login } from '../../store/actions/auth';

const Login = () => {
  const {
    auth: { error, loading, message },
    profile: { profile },
  } = useSelector((state) => state, shallowEqual);

  const [email, setEmail] = useState(profile.email || '');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) showToast(error, 'error');
    if (message === 'Login successful') {
      if (profile.email_verified !== 'false') {
        if (profile.home_id) Actions.dashboard({ type: 'reset' });
        else Actions.intro({ type: 'reset' });
      } else Actions.join({ verification: true });
    }
  }, [error, message]);

  const submit = () => {
    const data = { email, password };
    if (!email) showToast('Your email address is required', 'error');
    else if (!validateEmail(email))
      showToast('Your email address is not valid', 'error');
    else if (!password) showToast('Your password is required', 'error');
    else dispatch(login(data));
  };

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
              loading={loading}
              style={styles.button}
              onPress={() => submit()}
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
