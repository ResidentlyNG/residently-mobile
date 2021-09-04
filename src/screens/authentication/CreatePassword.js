import React, { useState } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { celebration, getStartedBg, thumb } from '../../../assets/images';
import { EyeSvg, MainIcon, UserSvg } from '../../../assets/svgs';
import {
  Button,
  HeaderText,
  Image,
  MineShaft,
  ParagraphText,
  RegularText,
  TextInput,
} from '../../components';
import { ModalBlur, TransactionLoader } from '../../components/Overlay';
import showToast from '../../components/Toast';
import { hp } from '../../components/utils';
import { createAccount } from '../../utils';
import { createPassword as styles } from './styles';

const TermsModal = ({ data, setModal }) => {
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    createAccount(data)
      .then((response) => {
        console.log('rr', response);
        setModal(false);
        Actions.join_room({ verification: true });
      })
      .catch((error) => {
        console.log('err', error, data);
        showToast(error?.message || 'Something went wrong');
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.termsContainer}>
      <View style={styles.celebrationContainer}>
        <Image
          source={celebration}
          style={styles.celebration}
          resizeMode="cover"
        />
      </View>
      <View style={styles.outerThumbCircle}>
        <View style={styles.thumbCircle}>
          <Image source={thumb} style={styles.thumb} />
        </View>
      </View>
      {loading ? (
        <View style={{ alignItems: 'center', flex: 1 }}>
          <TransactionLoader />
        </View>
      ) : (
        <>
          <ParagraphText
            title="Terms and Conditions"
            style={styles.termsHeader}
          />
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Mauris vitae gravida erat, in vehicula augue. Sed vitae rhoncus odio. "
            style={styles.termsText}
          />
          <Button
            title="Accept"
            style={styles.termsButton}
            onPress={() => register()}
          />
        </>
      )}
    </View>
  );
};

const CreatePassword = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modal, setModal] = useState(false);

  const data = { ...props.data, username, password };
  const submit = () => {
    if (!username) showToast('Your username is required', 'error');
    else if (!password) showToast('Your password is required', 'error');
    else if (password !== confirmPassword)
      showToast('Your password does not match', 'error');
    else setModal(true);
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
            title={'You are almost there. \n Create your password'}
            style={styles.createAccount}
          />
          <RegularText
            title={
              'To create your account we would \n need few information from you.'
            }
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
              label="Username"
              onChangeText={(value) => setUsername(value)}
              placeholder="Your Username"
              style={styles.usernameInput}
            />
            <TextInput
              icon={<EyeSvg />}
              value={password}
              label="Create Password"
              onChangeText={(value) => setPassword(value)}
              placeholder="Your Password"
              style={styles.usernameInput}
            />
            <TextInput
              icon={<EyeSvg />}
              value={confirmPassword}
              label="Confirm Password"
              onChangeText={(value) => setConfirmPassword(value)}
              placeholder="Your password again"
              style={styles.passwordInput}
            />
            <Button
              title="Create Account"
              style={styles.button}
              onPress={() => submit()}
            />
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
      <ModalBlur
        visible={modal}
        hasBackdrop
        modalStyle={{ position: 'relative' }}
        style={{
          height: hp(582),
          borderRadius: 20,
        }}
        onBackdropPress={() => setModal(false)}
        render={
          <TermsModal data={data} setModal={(value) => setModal(value)} />
        }
      />
    </>
  );
};

export default CreatePassword;
