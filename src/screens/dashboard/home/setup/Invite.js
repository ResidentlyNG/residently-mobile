import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { Personal } from '../../../../../assets/svgs';
import {
  ActionButton,
  Green,
  Header,
  HeaderText,
  RegularText,
  TextInput,
  White,
} from '../../../../components';
import showToast from '../../../../components/Toast';
import { validatePhone } from '../../../../components/utils';
import { inviteUsers } from '../../../../utils';
import { invite as styles } from './styles';

const Invite = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const count = !phoneArray.length
  //   ? new Array(phoneArray.length + 1).fill('item')
  //   : phoneArray;
  const changePhone = (value) => setPhone(value);

  const submit = () => {
    if (!phone.length || !validatePhone(phone)) {
      setError('This phone number is not valid');
    } else {
      setLoading(true);
      const data = {
        users: [phone],
      };
      inviteUsers(data)
        .then((response) => {
          console.log('rt', response);
          Actions.my_home({ type: 'reset' });
        })
        .catch((err) => {
          console.log('ed', err);
          showToast(err?.message, 'error');
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor={White} />
      <Header title="Invite roommate" />
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <HeaderText
          title="Please enter your roommate's phone number to invite"
          style={styles.header}
        />
        {/* {count.map((item, key) => ( */}
        <TextInput
          value={phone}
          onChangeText={changePhone}
          placeholder="Enter phone number"
          label="Phone Number"
          noIcon
          style={[styles.input, error && styles.errorInput]}
          rightIcon={<Personal fill={Green} />}
          keyboardType="phone-pad"
        />
        <RegularText title={error} style={styles.error} />
        {/* ))} */}
        {/* <TouchableOpacity style={styles.close}>
              <CloseProfile />
            </TouchableOpacity> */}

        {/* {canAddPhone ? (
          <TouchableOpacity onPress={submitPhone} style={styles.buttonView}>
            <ParagraphText
              title="Add another number"
              style={styles.addButton}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )} */}
        <ActionButton
          title="Submit"
          onPress={submit}
          style={styles.button}
          loading={loading}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Invite;
