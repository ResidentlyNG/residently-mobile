import React, { useState } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { celebration, getStartedBg, thumb } from '../../../assets/images';
import { EyeSvg, MainIcon } from '../../../assets/svgs';
import {
  Button,
  HeaderText,
  Image,
  MineShaft,
  ParagraphText,
  RegularText,
  TextInput,
} from '../../components';
import { ModalBlur } from '../../components/Overlay';
import { hp } from '../../components/utils';
import { createPassword as styles } from './styles';

const TermsModal = () => (
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
    <ParagraphText title="Terms and Conditions" style={styles.termsHeader} />
    <RegularText
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Mauris vitae gravida erat, in vehicula augue. Sed vitae rhoncus odio. "
      style={styles.termsText}
    />
    <Button
      title="Accept"
      style={styles.termsButton}
      onPress={() => Actions.dashboard({ type: 'reset' })}
    />
  </View>
);

const CreatePassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);

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
              icon={<EyeSvg />}
              value={username}
              label="Create Password"
              onChangeText={(value) => setUsername(value)}
              placeholder="Your Password"
              style={styles.usernameInput}
            />
            <TextInput
              icon={<EyeSvg />}
              value={email}
              label="Confirm Password"
              onChangeText={(value) => setEmail(value)}
              placeholder="Your password again"
              style={styles.passwordInput}
            />
            <Button
              title="Create Account"
              style={styles.button}
              onPress={() => setModal(true)}
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
        render={<TermsModal />}
      />
    </>
  );
};

export default CreatePassword;
