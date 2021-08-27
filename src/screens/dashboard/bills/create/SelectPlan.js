import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { profileGroup } from '../../../../../assets/images';
import { ForwardArrow } from '../../../../../assets/svgs';
import {
  ActionButton,
  Header,
  Image,
  ParagraphText,
  RegularText,
} from '../../../../components';
import { hp, NairaFormat } from '../../../../components/utils';
import { planStyles as styles } from './styles';

const SelectPlan = ({ title, bill }) => {
  const [plan, setPlan] = useState('room');
  const roomPlan = plan === 'room';
  const personal = plan === 'personal';

  const {
    home: { name },
  } = useSelector((state) => state.profile);

  return (
    <View style={styles.background}>
      <Header title={title} titleStyle={styles.headerText} />
      <View style={styles.mainView}>
        <RegularText title="Bill amount" style={styles.leadText} />
        <ParagraphText title={NairaFormat(bill)} style={styles.amount} />
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
            <RegularText title="Personal Bill" style={styles.billType} />
            <Image source={profileGroup} style={styles.profileGroup} />
          </View>
        </TouchableOpacity>
      </View>
      <ActionButton
        title="Next"
        icon={<ForwardArrow />}
        disabled={true}
        style={styles.button}
        // onPress={() => submit()}
      />
    </View>
  );
};

export default SelectPlan;
