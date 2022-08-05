import React, { useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Header,
  HeaderText,
  RegularText,
  TextInput,
} from '../../../../components';
import showToast from '../../../../components/Toast';
import { hp } from '../../../../components/utils';
import { createHome } from '../../../../utils';
// import { wp } from '../../../../components/utils';
import { hostStyles as styles } from './styles';

const Host = () => {
  const [home, setHome] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    createHome({ name: home, address })
      .then(() => Actions.setup_success({ home }))
      .catch((error) => showToast(error.message || 'Something went wrong'))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.background}>
      <Header title="Become a host" />

      <View style={styles.mainCard}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ alignItems: 'center' }}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={hp(52)}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <HeaderText title="1" style={styles.one} />
            </View>
          </View>
          <HeaderText title="Set up your apartment" style={styles.leadText} />
          <RegularText
            title="Enter the name you would like to give your apartment on Tripplex. If you live with other people, you would be able to invite them to join with this account"
            style={styles.subText}
          />
          <TextInput
            value={home}
            onChangeText={(value) => setHome(value)}
            label="Home name"
            placeholder="Give your 'home' a name"
            noIcon
            style={styles.input}
          />
          <TextInput
            value={address}
            onChangeText={(value) => setAddress(value)}
            label="Address"
            placeholder="Enter your home address"
            noIcon
            style={styles.input}
          />
          <Button
            title="Next"
            loading={loading}
            style={styles.button}
            disabled={!home || !address}
            onPress={() => onSubmit()} // Actions.setup_success()}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Host;
