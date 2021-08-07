import React, { useState } from 'react';
import { ImageBackground, StatusBar, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { secondScreenBg, rocket } from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import { Button, Green, ParagraphText } from '../../components';
import showToast from '../../components/Toast';
import { Image } from '../../components/View';
import { verifyEmail } from '../../utils';
import { join as styles } from './styles';

const Join = (props) => {
  const { verification } = props;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

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
        showToast(res.message);
        Actions.login({ type: 'reset' });
      })
      .catch((error) => showToast(error.message, 'error'))
      .finally(() => setLoading(false));
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
          />
          <Button
            title="Proceed"
            disabled={!code || code.length !== 6}
            loading={loading}
            style={styles.button}
            onPress={() => submit()}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Join;
