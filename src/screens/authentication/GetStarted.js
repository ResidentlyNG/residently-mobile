import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getStartedBg, rocketWelcome } from '../../../assets/images';
import { MainIcon } from '../../../assets/svgs';
import { Button, Green, ParagraphText, RegularText } from '../../components';
import { MainView, Image } from '../../components/View';
import { getStartedStyles as styles } from './styles';

const GetStarted = () => {
  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={getStartedBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.topRow}>
          <MainIcon />
          <RegularText title="Residently" style={styles.header} />
        </View>
        <MainView style={styles.mainView}>
          <Image source={rocketWelcome} style={styles.rocket} />
          <ParagraphText title="Welcome to Residently" style={styles.welcome} />
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. Mauris vitae gravida erat, in vehicula augue. Sed vitae rhoncus odio. "
            style={styles.subText}
          />
          <Button
            title="Accept"
            style={styles.button}
            onPress={() => Actions.login()}
          />
          <Button title="Decline" style={styles.declineButton} />
        </MainView>
      </ImageBackground>
    </>
  );
};

export default GetStarted;
