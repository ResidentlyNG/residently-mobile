import React, { useState } from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
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
import { resendEmailOtp, verifyEmail } from '../../../../utils';
import { joinRoom as styles } from './styles';

const JoinRoom = () => {
  // const { verification } = props;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(false);

  const { email } = useSelector((state) => state.profile.profile);

  // const leadText = verification ? 'Verify your Account' : '';
  // const subText = `Please enter the ${
  //   verification ? 'verification' : 'invite'
  // } \n code you received`;

  const submit = () => {
    setLoading(true);
    verifyEmail({ code })
      .then((res) => {
        showToast(res.message || 'Account verification successful');
        Actions.login({ type: 'reset' });
      })
      .catch((error) => showToast(error.message, 'error'))
      .finally(() => setLoading(false));
  };

  const resend = () => {
    setActivity(true);
    resendEmailOtp({ email })
      .then((res) => {
        showToast(res.message || 'Verification email sent');
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
          title="Become a roommate"
          iconFill={White}
          titleStyle={styles.headerTitle}
        />
        <View style={styles.mainView}>
          <HeaderText
            title="Please enter the invite code you received"
            style={styles.leadText}
          />
          <ParagraphText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Lorem ipsum."
            style={styles.subText}
          />
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Invite code"
            onChangeText={(value) => setCode(value)}
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
      </ImageBackground>
    </>
  );
};

export default JoinRoom;
