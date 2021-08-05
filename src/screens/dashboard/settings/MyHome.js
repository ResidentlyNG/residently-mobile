import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { profileGroup } from '../../../../assets/images';
import { Cross } from '../../../../assets/svgs';
import {
  Header,
  Image,
  HeaderText,
  ParagraphText,
  RegularText,
  Button,
} from '../../../components';
import { myHome as styles } from './styles';

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross />
  </View>
);

const MyHome = () => {
  return (
    <View style={styles.background}>
      <Header title="My Home" />
      <View style={styles.blockView}>
        <View>
          <ParagraphText title="BLOCK 5A Room" style={styles.blockRoom} />
          <RegularText title="💵 12 Bills created" style={styles.billsCount} />
        </View>
        <Image source={profileGroup} style={styles.profileGroup} />
      </View>
      <View style={styles.mainView}>
        <HeaderText title="Your roommates" style={styles.header} />

        <ParagraphText title="Invite your roommates today" />
        <RegularText title="" />
        <Button
          title="Add a new bill"
          icon={<ButtonPlus />}
          style={styles.button}
          onPress={() => Actions.bill_list()}
          // titleStyle={styles.buttonTitle}
          right
          flex
        />
      </View>
    </View>
  );
};

export default MyHome;
