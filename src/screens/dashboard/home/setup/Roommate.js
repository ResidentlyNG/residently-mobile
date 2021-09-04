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
      <Header title="Join a Room" />

      <View style={styles.mainCard}>
        <Image source={profileGroup} style={styles.profileGroup} />
        <HeaderText title="Set up your room" style={styles.leadText} />
        <RegularText
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. "
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
