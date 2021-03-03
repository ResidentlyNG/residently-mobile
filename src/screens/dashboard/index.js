import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Footer, FooterTab } from 'native-base';
import Home from './home';
import { Green, RegularText } from '../../components';
import { dashboard as styles } from './styles';
import {
  HomeSvg,
  NotificationsSvg,
  ProfileSvg,
  WalletSvg,
} from '../../../assets/svgs';

export default class Dashboard extends Component {
  footerButton(svg, activeSvg, title, active) {
    if (active) {
      return (
        <View style={styles.activeButton}>
          {activeSvg}
          <RegularText
            title={title}
            style={[styles.menuTitle, { color: Green }]}
          />
        </View>
      );
    }
    return (
      <View style={styles.activeButton}>
        {svg}
        <RegularText title={title} style={styles.menuTitle} />
      </View>
    );
  }

  onPress = () => {};

  render() {
    return (
      <>
        <Home />
        <Footer style={styles.footer}>
          <FooterTab style={[styles.footerTab]}>
            <TouchableOpacity
              onPress={() => this.onPress('Home')}
              style={styles.homeButtons}>
              {this.footerButton(<HomeSvg />, <HomeSvg />, 'Home', true)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('Wallet')}
              style={styles.homeButtons}>
              {this.footerButton(<NotificationsSvg />, null, 'Wallet')}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('History')}
              style={styles.homeButtons}>
              {this.footerButton(<WalletSvg />, null, 'History')}
              {/* <History /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('History')}
              style={styles.homeButtons}>
              {this.footerButton(<ProfileSvg />, null, 'Profile')}
              {/* <History /> */}
            </TouchableOpacity>
          </FooterTab>
        </Footer>
      </>
    );
  }
}
