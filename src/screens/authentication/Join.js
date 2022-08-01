import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { secondScreenBg, rocket } from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import {
  Button,
  Green,
  ParagraphText,
  TransactionLoader,
} from '../../components';
import showToast from '../../components/Toast';
import { Image } from '../../components/View';
import { handleEmailVerification } from '../../store/actions/auth';
import { resendEmailOtp, verifyEmail } from '../../utils';
import { join as styles } from './styles';

const Join = (props) => {
  const { verification } = props;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(false);

  const { email } = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  const leadText = verification
    ? 'Verify your Account'
    : 'Join as a \n roommate';
  const subText = `Please enter the ${
    verification ? 'verification' : 'invite'
  } \n code you received`;

  const submit = () => {
    setLoading(true);
    verifyEmail({ code })
      .then((res) => {
        console.log('res', res);
        dispatch(handleEmailVerification(res));
        showToast(res.message || 'Account verification successful');
        // Actions.login({ type: 'reset' });
      })
      .catch((error) => {
        console.log('err', error);
        showToast(error.message, 'error');
      })
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
        <View style={styles.topRow}>
          <MainIcon />
          <ParagraphText title={leadText} style={styles.header} />
        </View>
        <View style={styles.mainView}>
          <Image source={rocket} style={styles.rocket} />
          <ParagraphText title={subText} style={styles.subText} />
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Code"
            onChangeText={(value) => setCode(value)}
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
      </ImageBackground>
    </>
  );
};

export default Join;
