import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
// import { Footer, FooterTab } from 'native-base';
import Home from './home';
import { Green, GullGray, RegularText } from '../../components';
import { dashboard as styles } from './styles';
import { BillsMenu, HomeSvg, Personal, WalletMenu } from '../../../assets/svgs';
import Bills from './bills';
import Wallet from './wallet';
import Settings from './settings';

export default class Dashboard extends Component {
  state = {
    screen: this.props.bill ? 'Bills' : 'Home',
  };

  componentDidMount() {
    if (this.props.wallet) {
      this.setState({ screen: 'Wallet' });
    }
  }

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
    if (screen === 'Profile') return <Settings />;
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
              onPress={() => this.onPress('Profile')}
              style={styles.homeButtons}>
              {this.footerButton(
                <Personal fill={GullGray} />,
                <Personal fill={Green} />,
                'Profile',
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
