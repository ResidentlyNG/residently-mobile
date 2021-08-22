import { View, Text } from 'react-native';
import React from 'react';
import { TransactionLoader } from '../../components';

const Launch = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Loading...</Text>
      <TransactionLoader />
    </View>
  );
};

export default Launch;
