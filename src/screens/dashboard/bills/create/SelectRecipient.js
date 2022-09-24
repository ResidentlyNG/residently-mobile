import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Bank, MenuChevrolet, Residently } from '../../../../../assets/svgs';
import { Header, HeaderText, RegularText } from '../../../../components';
import showToast from '../../../../components/Toast';
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

const SelectRecipient = (props) => {
  return (
    <View style={styles.background}>
      <Header title="Select Account" />
      <View style={styles.mainView}>
        <HeaderText
          title="Where would you like your bill to be paid?"
          style={styles.leadText}
        />
        <RegularText
          title="Your bill can either be paid to a bank account or your Tripplex wallet "
          style={styles.subText}
        />
        <MenuView
          icon={<Bank />}
          title="Bank account"
          onPress={() => Actions.settlement({ data: props.data })}
        />
        <MenuView
          icon={<Residently />}
          title="Tripplex wallet"
          onPress={() => showToast('This feature is not yet available...')}
        />
      </View>
    </View>
  );
};

export default SelectRecipient;
