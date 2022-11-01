import React, { useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  DateInput,
  Header,
  ParagraphText,
  RegularText,
  Tab,
  TextInput,
} from '../../../../components';
import { duration as styles } from './styles';

const Duration = (props) => {
  const [selected, select] = useState('oneoff');
  const [paymentDate, setPaymentDate] = useState('');
  const [frequency, setFrequency] = useState('14');
  const oneoff = selected === 'oneoff';
  const propsData = {
    ...props.data,
    frequency: oneoff ? '0' : frequency,
    repeat: !oneoff,
    paymentDate,
  };
  const disabled = oneoff ? !paymentDate : !paymentDate || !frequency;
  const min = new Date();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.background}>
      <Header title="Select Duration" />
      <Tab
        containerStyle={styles.tabContainer}
        leftTabSelect={() => select('oneoff')}
        rightTabSelect={() => select('recurring')}
        rightTabSelected={selected === 'recurring'}
        leftTabSelected={selected === 'oneoff'}
        leftTitle="One-off"
        rightTitle="Recurring"
      />
      <DateInput
        dueDate={paymentDate}
        label="Payment Date"
        setDuedate={(date) => setPaymentDate(date)}
        minDate={min}
      />
      {!oneoff && (
        <>
          <View style={styles.frequencyView}>
            <TextInput
              value={frequency}
              onChangeText={(value) => setFrequency(value)}
              placeholder="14"
              label="Frequency"
              style={[styles.frequencyInput]}
              keyboardType="numeric"
              noIcon
            />
            <ParagraphText title="days" style={styles.frquencyTitle} />
          </View>
          <RegularText
            title="Enter how often you want this bill to be paid (in days)"
            style={styles.frequencyInfo}
          />
        </>
        // <DateInput
        //   dueDate={recurringDate}
        //   label="Deduction Date"
        //   setDuedate={(date) => setRecurringDate(date)}
        // />
      )}
      {/* <DateInput dueDate="" label="Time of the day" /> */}
      <View style={styles.buttonView}>
        <Button
          title="Proceed"
          disabled={disabled}
          onPress={() => Actions.select_recipient({ data: propsData })}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Duration;
