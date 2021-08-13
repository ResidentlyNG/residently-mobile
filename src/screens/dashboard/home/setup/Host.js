import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Header,
  HeaderText,
  RegularText,
  TextInput,
} from '../../../../components';
// import { wp } from '../../../../components/utils';
import { hostStyles as styles } from './styles';

const Host = () => {
  return (
    <View style={styles.background}>
      <Header title="Become a host" />

      <View style={styles.mainCard}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <HeaderText title="1" style={styles.one} />
          </View>
        </View>
        <HeaderText title="Set up your room" style={styles.leadText} />
        <RegularText
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. "
          style={styles.subText}
        />
        <TextInput
          value=""
          label="Room name"
          placeholder="Enter your room name"
          noIcon
          style={styles.input}
        />
        <Button
          title="Next"
          style={styles.button}
          onPress={() => Actions.setup_success()}
        />
      </View>
    </View>
  );
};

export default Host;
