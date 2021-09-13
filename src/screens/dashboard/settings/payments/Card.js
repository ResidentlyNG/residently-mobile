import React from 'react';
import { ImageBackground, View } from 'react-native';
import { cardBg, cardMask, mastercard } from '../../../../../assets/images';
import { Header, HeaderText, Image } from '../../../../components';
import { cardStyles as styles } from './styles';

const Card = () => {
  return (
    <ImageBackground
      source={cardBg}
      style={styles.background}
      imageStyle={styles.imageBg}
      resizeMode="stretch">
      <Header title="Payments" />
      <View style={styles.mainView}>
        <HeaderText title="Your Card" style={styles.headerText} />
        <ImageBackground
          source={cardMask}
          style={styles.cardBackground}
          imageStyle={styles.cardImageBg}>
          <HeaderText title="5282 3456 7890 1289" style={styles.pan} />
          <View style={styles.cardItemRow}>
            <HeaderText title="09/25" style={styles.detail} />
            <HeaderText title="***" style={styles.detail} />
            <Image source={mastercard} style={styles.mastercard} />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default Card;
