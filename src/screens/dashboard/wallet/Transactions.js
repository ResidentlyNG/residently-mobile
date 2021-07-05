import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Search } from '../../../../assets/svgs';
import { Header, Monza, White } from '../../../components';
import { transactions as styles } from './styles';
import { TransactionItem } from './index';
import { cable, fundBill, houseBill } from '../../../../assets/images';

const Transactions = () => {
  const [selectedIndex, selectIndex] = useState(0);
  const buttons = ['All', 'Success', 'Failed', 'Pending'];

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={White} barStyle="dark-content" />
      <Header title="Transaction History" rightComponent={<Search />} />
      <ButtonGroup
        onPress={(index) => selectIndex(index)}
        selectedIndex={selectedIndex}
        buttons={buttons}
        innerBorderStyle={styles.innerBorderStyle}
        selectedTextStyle={styles.selectedButtonGroupText}
        selectedButtonStyle={styles.selectedButtonGroup}
        disabledStyle={styles.disabledButtonGroup}
        textStyle={styles.buttonGroupText}
        buttonStyle={styles.buttonGroup}
        containerBorderRadius={3}
        containerStyle={styles.buttonGroupContainer}
      />
      <TransactionItem
        title="House Rent"
        amount="-₦ 2,000.00"
        icon={houseBill}
        amountColor={Monza}
      />
      <TransactionItem
        title="Cable TV"
        amount="-₦ 2,000.00"
        icon={cable}
        amountColor={Monza}
      />
      <TransactionItem
        title="Fund Wallet"
        amount="₦ 2,000.00"
        icon={fundBill}
      />
      <TransactionItem
        title="Fund Wallet"
        amount="₦ 2,000.00"
        icon={fundBill}
      />
      <TransactionItem
        title="Fund Wallet"
        amount="₦ 2,000.00"
        icon={fundBill}
      />
      <TransactionItem
        title="Fund Wallet"
        amount="₦ 2,000.00"
        icon={fundBill}
      />
    </View>
  );
};

export default Transactions;
