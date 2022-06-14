import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { host, profileGroup } from '../../../../../assets/images';
import { ForwardArrow } from '../../../../../assets/svgs';
import {
  ActionButton,
  Header,
  Image,
  ParagraphText,
  RegularText,
  White,
} from '../../../../components';
import { hp } from '../../../../components/utils';
import { selectStyles as styles } from './styles';

const SelectWallet = () => {
  const [plan, setPlan] = useState('room');
  const roomPlan = plan === 'room';
  const personal = plan === 'personal';

  const {
    home: { name },
  } = useSelector((state) => state.profile);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={White} barStyle="dark-content" />
      <Header title="Fund Wallet" titleStyle={styles.headerText} />
      <View style={styles.mainView}>
        <ParagraphText
          title="Select your preferred wallet to fund"
          style={styles.leadText}
        />
        <TouchableOpacity
          style={[
            styles.planCard,
            roomPlan && styles.active,
            { marginTop: hp(39) },
          ]}
          onPress={() => setPlan('room')}>
          <View style={styles.planRow}>
            <RegularText title={name} style={styles.billType} />
            <Image source={profileGroup} style={styles.profileGroup} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.planCard, personal && styles.active]}
          onPress={() => setPlan('personal')}>
          <View style={styles.planRow}>
            <RegularText title="Personal Wallet" style={styles.billType} />
            <Image source={host} style={styles.host} />
          </View>
        </TouchableOpacity>
      </View>
      <ActionButton
        title="Next"
        icon={<ForwardArrow />}
        disabled={true}
        style={styles.button}
        onPress={() => Actions.fund_wallet({ plan })}
      />
    </View>
  );
};

export default SelectWallet;
