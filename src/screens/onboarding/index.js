import React, { Component } from 'react';
import { ImageBackground, StatusBar, Text, View, Image } from 'react-native';
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
import { ForwardArrow, MainIcon } from '../../../assets/svgs';
import { Button, ParagraphText } from '../../components';

export default class Onboarding extends Component {
  state = {
    page: 1,
    statusColor: Colors.ScienceBlue,
    image: coliving,
  };

  timeInterval = () =>
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));

  componentDidMount() {
    this.interval = setInterval(() => this.timeInterval(), 1200);
  }

  componentDidUpdate(prevProps, prevState) {
    const pageEnded = prevState.page !== this.state.page;
    if (pageEnded && this.state.page === 4) {
      // clearInterval(this.interval);
      this.setState({ page: 1 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleStatusColor = () => {
    if (this.state.page === 1) return Colors.MineShaft;
    if (this.state.page === 2) return Colors.ScienceBlue;
    if (this.state.page === 3) return Colors.Sceance;
    return Colors.MineShaft;
  };

  handleImage = () => {
    if (this.state.page === 1) return coliving;
    if (this.state.page === 2) return bestSpace;
    if (this.state.page === 3) return roommate;
    return coliving;
  };

  handleImageBG = () => {
    if (this.state.page === 1) return firstScreenBg;
    if (this.state.page === 2) return secondScreenBg;
    if (this.state.page === 3) return thirdScreenBg;
    return firstScreenBg;
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.actionRow}>
          <View />
          <ParagraphText title="Next" style={[styles.actionTitle]} />
          <View style={styles.buttonIcon}>
            <ForwardArrow fill={Colors.MineShaft} />
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { page } = this.state;

    return (
      <>
        <StatusBar
          backgroundColor={this.handleStatusColor()}
          barStyle="light-content"
        />
        <ImageBackground
          style={[
            styles.onboardingBackground,
            { backgroundColor: this.handleStatusColor() },
          ]}
          source={this.handleImageBG()}
          imageStyle={page === 1 ? styles.imageBg : styles.secondImageBg}
          resizeMode="stretch">
          <View style={styles.topRow}>
            <MainIcon />
          </View>
          <View style={styles.imageView}>
            <View style={styles.imageWrapper}>
              <Image
                source={this.handleImage()}
                style={styles.onboardingImage}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Live Together {'\n'} Share Happily</Text>
            <Text style={styles.text}>
              We simplify planning and managing shared living costs, so you can
              focus on the fun and enjoy living with others {'\n'} {'\n'}{' '}
              Happily. Thriving. Together.
            </Text>
            {/* <Text style={styles.subText}>Happily. Thriving. Live Together.</Text> */}
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Login"
              style={styles.loginButton}
              alternate
              onPress={() => Actions.login()}
            />
            <Button
              title="Sign Up"
              style={styles.button}
              onPress={() => Actions.create_account()}
              light
            />
          </View>
        </ImageBackground>
      </>
    );
  }
}
