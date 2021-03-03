import React, { Component } from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  Image,
  // TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';
import * as Colors from '../../components/Colors';
import {
  coliving,
  bestSpace,
  roommate,
  firstScreenBg,
  secondScreenBg,
  thirdScreenBg,
} from '../../../assets/images';
import { ForwardIcon, MainIcon } from '../../../assets/svgs';
import { RegularText } from '../../components';
import { TouchableOpacity } from 'react-native';
// import { RightChevrolet } from '../../../assets/svgs';

const slides = [
  {
    key: 'first',
    title: 'Coliving made easy',
    text:
      'We provide a service that promotes the advantage of coliving in todays world',
    source: coliving,
    backgroundImage: firstScreenBg,
  },
  {
    key: 'second',
    title: 'Find the best space',
    text:
      // eslint-disable-next-line quotes
      "We provide a service that promotes the advantage of coliving in today's world",
    source: bestSpace,
    backgroundImage: secondScreenBg,
  },
  {
    key: 'third',
    title: 'Get a roommate to share with',
    text:
      'We provide a service that promotes the advantage of coliving in todays world',
    source: roommate,
    backgroundImage: thirdScreenBg,
  },
];

export default class Onboarding extends Component {
  state = {
    page: 1,
    statusColor: Colors.ScienceBlue,
  };

  _renderItem = ({ item, index }) => (
    <ImageBackground
      style={[
        styles.onboardingBackground,
        { backgroundColor: this.handleStatusColor(index) },
      ]}
      source={item.backgroundImage}
      imageStyle={this.state.page === 1 ? styles.imageBg : styles.secondImageBg}
      resizeMode="stretch">
      <View style={styles.topRow}>
        <MainIcon />
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => Actions.get_started({ type: 'reset' })}>
          <RegularText title="Skip" style={styles.skip} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <View style={styles.imageWrapper}>
          <Image
            source={item.source}
            style={styles.onboardingImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      {/* <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => Actions.get_started({ type: 'reset' })}>
          <ParagraphText title="Get Started" style={styles.createAccountText} />
        </TouchableOpacity>
      </View> */}
    </ImageBackground>
    // </View>
  );

  handleStatusColor = (index) => {
    if (index === 0) return Colors.ScienceBlue;
    if (index === 1) return Colors.MineShaft;
    if (index === 2) return Colors.Sceance;
    return Colors.ScienceBlue;
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.nextButton}>
          <ForwardIcon />
        </View>
      </View>
    );
  };

  render() {
    const { statusColor } = this.state;
    return (
      <>
        <StatusBar backgroundColor={statusColor} barStyle="light-content" />
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          dotStyle={{ backgroundColor: statusColor }}
          activeDotStyle={{ backgroundColor: statusColor }}
          showNextButton={true}
          showDoneButton={true}
          renderNextButton={this._renderNextButton}
          onSlideChange={(index) =>
            this.setState({
              page: index + 1,
              statusColor: this.handleStatusColor(index),
            })
          }
          onDone={() => Actions.get_started({ type: 'reset' })}
        />
      </>
    );
  }
}
