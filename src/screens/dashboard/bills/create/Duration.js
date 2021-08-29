import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, DateInput, Header, Tab } from '../../../../components';
import { duration as styles } from './styles';

const Duration = () => {
  const [selected, select] = useState('oneoff');
  const [paymentDate, setPaymentDate] = useState('');
  const [recurringDate, setRecurringDate] = useState('');
  const oneoff = selected === 'oneoff';

  return (
    <View style={styles.background}>
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
      />
      {!oneoff && (
        <DateInput
          dueDate={recurringDate}
          label="Deduction Date"
          setDuedate={(date) => setRecurringDate(date)}
        />
      )}
      {/* <DateInput dueDate="" label="Time of the day" /> */}
      <View style={styles.buttonView}>
        <Button title="Proceed" />
      </View>
    </View>
  );
};

export default Duration;
