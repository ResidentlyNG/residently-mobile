import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Bank, MenuChevrolet, Residently } from '../../../../../assets/svgs';
import { Header, HeaderText, RegularText } from '../../../../components';
import { recipient as styles } from './styles';

const MenuView = ({ icon, title, onPress }) => (
  <TouchableOpacity
    style={styles.menuView}
    onPress={onPress}
    activeOpacity={0.6}>
    <View style={styles.iconView}>{icon}</View>
    <RegularText title={title} style={styles.menuTitle} />
    <View style={styles.chevrolet}>
      <MenuChevrolet />
    </View>
  </TouchableOpacity>
);

const SelectRecipient = () => (
  <View style={styles.background}>
    <Header title="Select Account" />
    <View style={styles.mainView}>
      <HeaderText
        title="Where would you like your bill to be paid?"
        style={styles.leadText}
      />
      <RegularText
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        style={styles.subText}
      />
      <MenuView
        icon={<Bank />}
        title="Bank account"
        onPress={() => Actions.settlement()}
      />
      <MenuView icon={<Residently />} title="Residently wallet" />
    </View>
  </View>
);

export default SelectRecipient;
