import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { secondScreenBg } from '../../../../../assets/images';
import {
  ActionButton,
  Header,
  HeaderText,
  TextInput,
  TransactionLoader,
  White,
} from '../../../../components';
import showToast from '../../../../components/Toast';
import { fundWallet } from '../../../../utils';
import { fund as styles } from './styles';

const FundWallet = (props) => {
  const [bill, setBill] = useState('');
  const [errors, setError] = useState({ title: false, bill: false });
  const [loading, setLoading] = useState(false);
  const billError = errors.bill;

  useEffect(() => {
    if (errors.title) setError({ title: false });
    if (errors.bill) setError({ bill: false });
    // return () => {
    //   cleanup
    // }
  }, [bill]);

  const submit = () => {
    if (!bill) {
      showToast('Bill amount is required', 'error');
      setError({ bill: true });
    } else {
      setLoading(true);
      const source = props.plan === 'room' ? 'wallet' : 'card';
      fundWallet({ amount: bill, source })
        .then((response) => {
          console.log('ROP', response);
          if (response.message.includes('initialized')) {
            const { authorization_url: uri, reference } = response.data.data;
            Actions.webview({ uri, reference });
          } else {
            Actions.dashboard({ wallet: true, type: 'reset' });
          }
        })
        .catch((error) => {
          console.log('ert', error);
          showToast(error.message || 'Something went wrong', 'error');
        })
        .finally(() => setLoading(false));
      // addCard({ amount: bill })
      //   .then((response) => {
      //     const { authorization_url: uri, reference } = response.data.data;
      //     console.log('RX', response);
      //     Actions.webview({ uri, reference });
      //   })
      //   .catch((error) => console.log('err', error));
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={secondScreenBg}
      imageStyle={styles.imageBg}
      resizeMode="stretch">
      <KeyboardAwareScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Header title="Fund Wallet" />
        <HeaderText
          title="Enter the amount you would like to fund"
          style={styles.leadText}
        />
        <TextInput
          value={bill}
          onChangeText={(value) => setBill(value)}
          placeholder="Enter amount"
          label="Amount"
          style={[styles.input, billError && styles.errorBorder]}
          noIcon
          keyboardType="number-pad"
        />

        <ActionButton
          title="Next"
          style={styles.individualButton}
          iconFill={White}
          onPress={submit}
        />
      </KeyboardAwareScrollView>
      {loading ? <TransactionLoader /> : null}
    </ImageBackground>
  );
};

export default FundWallet;
