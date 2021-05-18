import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  ActionButton,
  Green,
  Header,
  MainView,
  RegularText,
  TextInput,
} from '../../../components';
import { customBill as styles } from './styles';

const CustomBill = () => {
  const [bill, setBill] = useState('');
  return (
    <View style={styles.background}>
      <Header title="Custom Bill" />
      <MainView style={styles.mainView}>
        <RegularText
          title="What would you like to call this bill?"
          style={styles.leadText}
        />
        <TextInput
          value={bill}
          onChangeText={(value) => setBill(value)}
          placeholder="Enter your name"
          label="Name"
          style={styles.leadInput}
        />
        <TextInput
          value={bill}
          onChangeText={(value) => setBill(value)}
          placeholder="Enter bill amount"
          label="Amount"
          style={styles.input}
        />
        <TextInput
          value={bill}
          onChangeText={(value) => setBill(value)}
          placeholder="21/04/2021"
          label="Date"
          style={styles.input}
        />
        <ActionButton
          title="Split Payment"
          style={styles.splitButton}
          onPress={() => Actions.process_bill()}
        />
        <ActionButton
          title="Individual Payment"
          style={styles.individualButton}
          iconFill={Green}
          light
        />
      </MainView>
    </View>
  );
};

export default CustomBill;
