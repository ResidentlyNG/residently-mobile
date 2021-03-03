import React, { Component } from 'react';
import { StatusBar, ImageBackground, View } from 'react-native';
import { Green, Image, ParagraphText, RegularText } from '../../../components';
import { secondScreenBg, user } from '../../../../assets/images';
import { home as styles } from './styles';
import { MenuIcon } from '../../../../assets/svgs';

export default class Home extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={Green} barStyle="light-content" />
        <ImageBackground
          style={styles.background}
          source={secondScreenBg}
          imageStyle={styles.imageBg}
          resizeMode="stretch">
          <View style={styles.topRow}>
            <Image source={user} style={styles.userImage} />
            <View style={styles.menuView}>
              <MenuIcon />
            </View>
          </View>
          <RegularText title=" Welcome Back," style={styles.welcomeText} />
          <ParagraphText title="Samuel." style={styles.username} />
        </ImageBackground>
      </>
    );
  }
}
