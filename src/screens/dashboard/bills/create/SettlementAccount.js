import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { Bank } from '../../../../../assets/svgs';
import {
  Button,
  Header,
  HeaderText,
  ModalBlur,
  RegularText,
  TextInput,
  TransactionLoader,
  White,
} from '../../../../components';
import showToast from '../../../../components/Toast';
import { hp, wp } from '../../../../components/utils';
import { createBill, validateAccount } from '../../../../utils';
import { settlement as styles } from './styles';

const BanksModal = ({ data, select }) => (
  <View style={styles.view}>
    <HeaderText title="Select Bank" style={styles.modalLeadText} />
    <ScrollView style={{ width: '100%' }}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.bank}
          onPress={() => select(item.id)}>
          <RegularText title={item.name} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const SettlementAccount = (props) => {
  const [modal, setModal] = useState(false);
  const [bank, setBank] = useState({});
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(false);
  const {
    wallet: { banks },
    profile: { profile },
  } = useSelector((state) => state);

  const selectBank = (id) => {
    const result = banks.find((item) => item.id === id);
    setBank(result);
    setModal(false);
  };
  const disabled = !accountName.length;

  const getAccount = () => {
    const data = {
      bank_code: bank.code,
      account_number: accountNumber,
    };
    setLoading(true);
    validateAccount(data)
      .then((response) => setAccountName(response?.data?.account_name))
      .catch((error) =>
        showToast(error?.data?.message || 'Something went wrong', 'error'),
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (bank && accountNumber.length === 10) {
      getAccount();
    }
  }, [accountNumber]);

  const onSubmit = () => {
    setActivity(true);
    const { title, bill, repeat, frequency, paymentDate } = props.data;
    const payload = {
      title,
      amount: String(bill),
      date: paymentDate.split('/').reverse().join('-'),
      repeat,
      frequency,
      users: [
        {
          id: String(profile.id),
          amount: String(bill),
        },
      ],
      account_number: accountNumber,
      bank_code: bank.code,
    };

    createBill(payload)
      .then((response) => {
        Actions.bill({ data: response, payload, type: 'reset' });
      })
      .catch((error) => {
        showToast(error?.message || 'Something went wrong', 'error');
      })
      .finally(() => setActivity(false));
  };

  return (
    <>
      <View style={styles.background}>
        <Header title="Settlement Account" />
        <View style={styles.mainView}>
          <KeyboardAwareScrollView style={{ flex: 1, height: '100%' }}>
            <View style={styles.leadRow}>
              <Bank />
              <HeaderText title="Bank account" style={styles.leadText} />
            </View>
            <RegularText
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              style={styles.subText}
            />
            <TouchableOpacity onPress={() => setModal(true)}>
              <TextInput
                value={bank?.name || ''}
                label="Bank"
                placeholder="Bank Name"
                style={styles.input}
                noIcon
                editable={false}
              />
            </TouchableOpacity>
            <TextInput
              value={accountNumber}
              label="Account number"
              placeholder="Account number"
              style={styles.input}
              onChangeText={(value) => setAccountNumber(value)}
              keyboardType="number-pad"
              maxLength={10}
              noIcon
            />
            <View style={styles.nameInput}>
              {loading ? (
                <View style={styles.loader}>
                  <TransactionLoader size="small" />
                </View>
              ) : null}
              {accountName.length && !loading ? (
                <TextInput
                  value={accountName}
                  label="Account name"
                  placeholder="Account number"
                  style={[styles.input, { marginTop: 0 }]}
                  editable={false}
                  // onChangeText={(value) => setAccountNumber(value)}
                  keyboardType="number-pad"
                  noIcon
                />
              ) : (
                <View />
              )}
            </View>
          </KeyboardAwareScrollView>
          <View style={styles.buttonView}>
            <Button
              title="Continue"
              green
              disabled={disabled}
              loading={activity}
              onPress={onSubmit}
            />
          </View>
        </View>
        <ModalBlur
          visible={modal}
          hasBackdrop
          modalStyle={{ position: 'relative' }}
          style={{
            height: hp(482),
            width: wp(340),
            borderRadius: 20,
            backgroundColor: White,
          }}
          fixed
          onBackdropPress={() => setModal(false)}
          render={
            <BanksModal
              data={banks}
              setModal={(value) => setModal(value)}
              select={(id) => selectBank(id)}
            />
          }
        />
      </View>
    </>
  );
};

export default SettlementAccount;
