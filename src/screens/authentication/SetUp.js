import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BoxShadow } from 'react-native-shadow';
import {
  secondScreenBg,
  profileGroup,
  house,
  serviceGroup,
  moneyBag,
  bills,
} from '../../../assets/images';
import { MainIcon, MiniForwardChevrolet } from '../../../assets/svgs';
import {
  Button,
  DodgerBlue,
  ElectricViolet,
  Green,
  ParagraphText,
  RegularText,
  ScienceBlue,
} from '../../components';
import { hp, wp } from '../../components/utils';
import { MainView, Image } from '../../components/View';
import { setUp as styles } from './styles';

const BillCard = ({ image, color, title, style }) => (
  <View style={[styles.billContainer, style]}>
    {/* <BoxShadow setting={shadowOpt}> */}
    <View style={styles.innerContainer}>
      <View style={styles.sectionRow}>
        <Image source={image} style={styles.billImage} />
        <View style={styles.sectionProfile}>
          <ParagraphText title={title} style={styles.title} />
          <RegularText
            title="Ready to get that place then browse"
            style={styles.detail}
          />
        </View>
      </View>
      <View style={[styles.arrowBox, { backgroundColor: color }]}>
        <MiniForwardChevrolet />
      </View>
    </View>
    {/* </BoxShadow> */}
  </View>
);

const SetUp = () => {
  const shadowOpt = {
    width: wp(304),
    height: hp(428),
    color: '#000',
    border: 2,
    radius: 34,
    opacity: 0.03,
    x: 0,
    y: 54,
    // style: { marginTop: hp(15) },
  };

  return (
    <>
      <StatusBar backgroundColor={ScienceBlue} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={secondScreenBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.topRow}>
          <MainIcon />
          <ParagraphText title="Set up your Room" style={styles.header} />
        </View>
        <MainView style={styles.mainView}>
          <Image source={profileGroup} style={styles.profileGroup} />
          <ParagraphText
            title="What Bills would you want to manage?"
            style={styles.subText}
          />
          <BoxShadow setting={shadowOpt}>
            <View style={styles.backgroundCard}>
              <BillCard title="Rent" color={Green} image={house} />
              <BillCard
                title="Service Charge"
                color={DodgerBlue}
                image={serviceGroup}
                style={styles.billCard}
              />
              <BillCard
                title="Electricity"
                color={ElectricViolet}
                image={moneyBag}
                style={styles.billCard}
              />
              <BillCard
                title="Custom Bills"
                color={Green}
                image={bills}
                style={styles.billCard}
              />
            </View>
            <Button
              title="Skip"
              style={styles.button}
              titleStyle={styles.buttonTitle}
              onPress={() => Actions.dashboard()}
            />
          </BoxShadow>
        </MainView>
      </ImageBackground>
    </>
  );
};

export default SetUp;
