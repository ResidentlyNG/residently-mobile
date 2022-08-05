import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { roommateStyles as styles } from './styles';
import {
  Button,
  Header,
  HeaderText,
  Image,
  RegularText,
} from '../../../../components';
import { profileGroup } from '../../../../../assets/images';

const Roommate = () => {
  return (
    <View style={styles.background}>
      <Header title="Join an Apartment" />

      <View style={styles.mainCard}>
        <Image source={profileGroup} style={styles.profileGroup} />
        <HeaderText title="Proceed to setup" style={styles.leadText} />
        <RegularText
          title="If you already got an invite, proceed to the next screen to join the apartment account on Tripplex"
          style={styles.subText}
        />
        <Button
          title="Next"
          style={styles.button}
          onPress={() => Actions.join_room()}
        />
      </View>
    </View>
  );
};

export default Roommate;
