import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';
import moment from 'moment';
import { Search } from '../../../../assets/svgs';
import {
  Header,
  Monza,
  White,
  FlatList,
  Green,
  RegularText,
  ParagraphText,
  WoodSmoke,
} from '../../../components';
import { transactions as styles } from './styles';
import { TransactionItem } from './index';
import { fundBill, houseBill } from '../../../../assets/images';
import { getTransactions } from '../../../store/actions/transactions';
import { NairaFormat } from '../../../components/utils';

const Transactions = () => {
  const [selectedIndex, selectIndex] = useState(0);
  const { fetchingMore, loading, refreshing, transactions } = useSelector(
    (state) => state.transactions,
  );

  const buttons = ['All', 'Success', 'Failed', 'Pending'];

  const dispatch = useDispatch();
  const pullToRefresh = () => dispatch(getTransactions());

  useEffect(() => {
    pullToRefresh();
    selectIndex(0);
  }, []);

  useEffect(() => {
    let status;
    if (selectedIndex === 1) {
      status = 'successful';
    } else if (selectedIndex === 0) {
      status = undefined;
    } else {
      status = buttons[selectedIndex].toLowerCase();
    }
    dispatch(getTransactions(undefined, undefined, status));
  }, [selectedIndex]);

  const noTransactionsText = () => {
    let status = '';
    if (selectedIndex === 2) {
      status = 'failed ';
    } else if (selectedIndex === 3) {
      status = 'pending ';
    }
    return `You have no ${status}transactions yet. \n When you ${
      status ? 'have' : 'make'
    } a ${status}transaction, it will appear here.`;
  };

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
        disabled={fetchingMore || loading || refreshing}
      />

      <FlatList
        data={transactions}
        isRefreshing={loading}
        handlePullToRefresh={pullToRefresh}
        renderItem={({ item }) => {
          const title =
            item?.narration || (item.type === 'credit' ? 'Topup' : item.type);
          const date = moment(item.created_at).format('DD/MM/YYYY');
          const time = moment(item.created_at).format('LT');
          return (
            <TransactionItem
              key={item.id}
              title={title}
              amount={NairaFormat(item.amount)}
              icon={item.type === 'credit' ? fundBill : houseBill}
              date={date}
              time={time}
              amountColor={item.type === 'credit' ? Green : Monza}
            />
          );
        }}
        style={{ height: 340 }}
        emptyComponent={
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <ParagraphText
              title="No transactions yet"
              style={{ color: '#000', fontSize: 16 }}
            />
            <RegularText
              title={noTransactionsText()}
              style={{ color: WoodSmoke, textAlign: 'center', marginTop: 5 }}
            />
          </View>
        }
      />
      {/* <TransactionItem
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
      /> */}
    </View>
  );
};

export default Transactions;
