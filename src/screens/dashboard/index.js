import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
// import { Footer, FooterTab } from 'native-base';
import Home from './home';
import { Green, RegularText } from '../../components';
import { dashboard as styles } from './styles';
import {
  BillsMenu,
  ExploreMenu,
  HomeSvg,
  WalletMenu,
} from '../../../assets/svgs';
import Bills from './bills';
import Wallet from './wallet';

export default class Dashboard extends Component {
  state = {
    screen: 'Home',
  };

  footerButton(svg, activeSvg, title) {
    if (this.state.screen === title) {
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

  displayScreen = (screen) => {
    if (screen === 'Bills') return <Bills />;
    if (screen === 'Wallet') return <Wallet />;
    return <Home />;
  };

  onPress = (screen) => {
    this.setState({ screen });
  };

  render() {
    const { screen } = this.state;

    return (
      <View style={styles.background}>
        <View style={{ flex: 1 }}>{this.displayScreen(screen)}</View>
        <View style={styles.footer}>
          <View style={[styles.footerTab]}>
            <TouchableOpacity
              onPress={() => this.onPress('Home')}
              style={styles.homeButtons}>
              {this.footerButton(
                <HomeSvg />,
                <HomeSvg fill={Green} />,
                'Home',
                true,
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('Bills')}
              style={styles.homeButtons}>
              {this.footerButton(
                <BillsMenu />,
                <BillsMenu fill={Green} />,
                'Bills',
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('Wallet')}
              style={styles.homeButtons}>
              {this.footerButton(
                <WalletMenu />,
                <WalletMenu fill={Green} />,
                'Wallet',
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onPress('Explore')}
              style={styles.homeButtons}>
              {this.footerButton(
                <ExploreMenu />,
                <ExploreMenu fill={Green} />,
                'Explore',
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
