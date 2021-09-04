import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import { Bank } from '../../../../../assets/svgs';
import {
  Header,
  HeaderText,
  RegularText,
  TextInput,
} from '../../../../components';
import { settlement as styles } from './styles';

const list = [
  { title: 'List Item 1' },
  { title: 'List Item 2' },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    // onPress: () => setIsVisible(false),
  },
];

const SettlementAccount = () => {
  // const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {/* <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
        <View style={{ backgroundColor: '#FFF', height: 230 }}>
          {list.map((item, index) => (
            <View key={index}>
              <RegularText title={item.title} />
            </View>
          ))}
        </View>
      </BottomSheet> */}
      <View style={styles.background}>
        <Header title="Settlement Account" />
        <View style={styles.mainView}>
          <View style={styles.leadRow}>
            <Bank />
            <HeaderText title="Bank account" style={styles.leadText} />
          </View>
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            style={styles.subText}
          />
          <TextInput
            value=""
            placeholder="Account number"
            style={styles.input}
          />
          <TextInput value="" placeholder="Account name" style={styles.input} />
        </View>
      </View>
    </>
  );
};

export default SettlementAccount;
