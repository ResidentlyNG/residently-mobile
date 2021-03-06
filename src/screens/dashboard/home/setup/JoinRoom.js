import React, { useState } from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { secondScreenBg } from '../../../../../assets/images';
import {
  Button,
  Green,
  HeaderText,
  ParagraphText,
  TransactionLoader,
  White,
  TextInput,
} from '../../../../components';
import showToast from '../../../../components/Toast';
import { Header } from '../../../../components/View';
import {
  resendEmailOtp,
  resendInvite,
  verifyEmail,
  verifyInvite,
} from '../../../../utils';
import { joinRoom as styles } from './styles';

const JoinRoom = (props) => {
  const { verification } = props;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(false);

  const { email, phone } = useSelector((state) => state.profile.profile);

  const label = verification ? 'Verification code' : 'Invite code';
  const leadText = verification ? 'Verify your Account' : 'Become a roommate';
  const subText = `Please enter the ${
    verification ? 'verification' : 'invite'
  } code you received`;

  const submitFn = (data) =>
    verification ? verifyEmail(data) : verifyInvite(data);
  const resendFn = (data) =>
    verification ? resendEmailOtp(data) : resendInvite();

  const submit = () => {
    setLoading(true);
    submitFn({ code, otp: code, phone })
      .then((res) => {
        showToast(res.message || 'Account verification successful');
        if (verification) {
          Actions.login({ type: 'reset' });
        } else {
          Actions.my_home({ type: 'reset' });
        }
      })
      .catch((error) => showToast(error.message, 'error'))
      .finally(() => setLoading(false));
  };

  const resend = () => {
    setActivity(true);
    resendFn({ email })
      .then((res) => {
        showToast(res.message || 'Verification code sent');
      })
      .catch((error) => {
        showToast(error.message || 'Something went wrong', 'error');
      })
      .finally(() => setActivity(false));
  };

  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={secondScreenBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <Header
          title={leadText}
          iconFill={White}
          titleStyle={styles.headerTitle}
        />
        <KeyboardAwareScrollView>
          <View style={styles.mainView}>
            <HeaderText title={subText} style={styles.leadText} />
            <ParagraphText
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Lorem ipsum."
              style={styles.subText}
            />
            <TextInput
              style={styles.input}
              value={code}
              placeholder="Enter your Invite code"
              label={label}
              onChangeText={(value) => setCode(value)}
              noIcon
              keyboardType="number-pad"
            />
            <Button
              title="Proceed"
              disabled={!code || code.length !== 6}
              loading={loading}
              style={styles.button}
              onPress={() => submit()}
            />
            <Text style={styles.resendText}>
              Didn't get the code?{' '}
              <Text style={styles.resend} onPress={() => resend()}>
                Resend
              </Text>
            </Text>
          </View>
          {activity && <TransactionLoader />}
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
};

export default JoinRoom;
