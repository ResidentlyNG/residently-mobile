import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import {
  ActionButton,
  Header,
  HeaderText,
  TextInput,
} from '../../../../components';
import { Slider } from '../../../../components/Slider';
import showToast from '../../../../components/Toast';
import { nameBill as styles } from './styles';

const NameBill = () => {
  const [title, setTitle] = useState('');
  const [bill, setBill] = useState('');
  const [errors, setError] = useState({ title: false, bill: false });
  const currentAmount = Math.round(bill);
  const titleError = errors.title;
  const billError = errors.bill;

  useEffect(() => {
    if (errors.title) setError({ title: false });
    if (errors.bill) setError({ bill: false });
    // return () => {
    //   cleanup
    // }
  }, [title, bill]);

  const submit = () => {
    if (!title) {
      showToast('Name of bill is required', 'error');
      setError({ title: true });
    } else if (!bill) {
      showToast('Bill amount is required', 'error');
      setError({ bill: true });
    } else Actions.select_plan({ title, bill: currentAmount });
  };

  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Header title="Custom Bill" />
        <HeaderText
          title="What would you like to call this bill?"
          style={styles.leadText}
        />
        <TextInput
          value={title}
          onChangeText={(value) => setTitle(value)}
          placeholder="Enter name of bill"
          label="Name"
          style={[styles.leadInput, titleError && styles.errorBorder]}
          noIcon
        />
        <TextInput
          value={String(currentAmount)}
          onChangeText={(value) => setBill(value)}
          placeholder="Enter bill amount"
          label="Amount"
          style={[styles.input, billError && styles.errorBorder]}
          noIcon
          keyboardType="number-pad"
        />

        <Slider
          amount={Number(bill) || 30}
          currentAmount={currentAmount}
          setAmount={(value) => setBill(value)}
        />

        <ActionButton
          title="Next"
          style={styles.individualButton}
          // iconFill={Green}
          onPress={() => submit()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default NameBill;
