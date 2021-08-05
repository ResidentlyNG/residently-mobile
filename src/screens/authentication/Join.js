import React, { useState } from 'react';
import { ImageBackground, StatusBar, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { secondScreenBg, rocket } from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import { Button, Green, ParagraphText } from '../../components';
import { Image } from '../../components/View';
import { join as styles } from './styles';

const Join = () => {
  const [code, setCode] = useState('');

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
          <ParagraphText
            title={'Join as a \n roommate'}
            style={styles.header}
          />
        </View>
        <View style={styles.mainView}>
          <Image source={rocket} style={styles.rocket} />
          <ParagraphText
            title={'Please enter the invite \n code you received'}
            style={styles.subText}
          />
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Code"
            onChangeText={(value) => setCode(value)}
          />
          <Button
            title="Proceed"
            style={styles.button}
            onPress={() => Actions.login()}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Join;
