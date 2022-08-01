import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Cross } from '../../../../assets/svgs';
import {
  Header,
  ParagraphText,
  RegularText,
  Tab,
  White,
  WoodSmoke,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import NewBill from '../../authentication/SetUp';
import { hp, wp } from '../../../components/utils';
import { billList as styles } from './styles';
import { BillItem } from './utils';

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross />
  </View>
);

const Button = ({ icon, onPress, title, titleStyle }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.actionRow}>
      <View style={styles.buttonLeftIcon}>{icon}</View>
      <ParagraphText
        title={title}
        style={[styles.actionButtonTitle, titleStyle]}
      />
      {/* <View style={styles.buttonIcon}>{icon}</View> */}
    </View>
  </TouchableOpacity>
);

const BillList = () => {
  const [selected, select] = useState('personal');
  const [modal, setModal] = useState(false);

  const { bills } = useSelector((state) => state.bills);

  const personalBills = bills.filter((bill) => bill?.account_id === null);
  const jointBills = bills.filter((bill) => bill?.account_id !== null);

  const displayedBills = (
    selected === 'personal' ? personalBills : jointBills
  ).sort((a, b) => moment(b?.date).valueOf() - moment(a?.date).valueOf());
  const noBills = displayedBills.length === 0;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={White} />
      <View style={styles.background}>
        <Header title="All Bills" titleStyle={{ color: WoodSmoke }} />
        <View style={styles.billsCard}>
          <Tab
            containerStyle={styles.tabContainer}
            leftTabSelect={() => select('personal')}
            rightTabSelect={() => select('joint')}
            rightTabSelected={selected === 'joint'}
            leftTabSelected={selected === 'personal'}
            leftTitle="Personal"
            rightTitle="Joint"
          />
          <View style={{ height: hp(515) }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: hp(30) }}>
              {!noBills ? (
                displayedBills.map((item) => (
                  <BillItem key={item.id} bill={item} />
                ))
              ) : (
                <View style={styles.noBillView}>
                  <RegularText title={`You do not have a ${selected} bill`} />
                </View>
              )}
            </ScrollView>
          </View>
          <Button
            title="Add a new bill"
            icon={<ButtonPlus />}
            style={styles.button}
            onPress={() => Actions.bill_list()}
            // titleStyle={styles.buttonTitle}
            left
            flex
          />
        </View>
      </View>
      <ModalBlur
        visible={modal}
        hasBackdrop
        style={{
          height: hp(678),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: wp(375),
          backgroundColor: White,
          alignSelf: 'center',
          bottom: -hp(25),
        }}
        fixed
        onBackdropPress={() => setModal(false)}
        render={<NewBill closeModal={() => setModal(false)} />}
      />
    </>
  );
};

export default BillList;
