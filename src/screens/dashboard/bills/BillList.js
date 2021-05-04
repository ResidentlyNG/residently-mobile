import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { profileGroup } from '../../../../assets/images';
import { Cross } from '../../../../assets/svgs';
import {
  DodgerBlue,
  Header,
  HeaderText,
  Image,
  ParagraphText,
  RegularText,
  Tab,
  White,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import NewBill from '../../authentication/SetUp';
import { hp, wp } from '../../../components/utils';
import { billList as styles } from './styles';

const BillItem = ({ last }) => (
  <View style={styles.billItem}>
    <View style={styles.billRow}>
      <ParagraphText title="Electricity Bill" style={styles.billTitle} />
      <Image source={profileGroup} style={styles.profileGroup} />
    </View>
    <View style={styles.amountRow}>
      <HeaderText title="₦ 2,000.00" style={styles.billAmount} />
      <RegularText title="Due: In 2 weeks" style={styles.billDate} />
    </View>
    {!last ? <View style={styles.billDivider} /> : null}
  </View>
);

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
  const [selected, select] = useState('shortTerm');
  const [modal, setModal] = useState(false);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={DodgerBlue} />
      <View style={styles.background}>
        <Header title="Your Bills" />
        <View style={styles.billsCard}>
          <Tab
            containerStyle={styles.tabContainer}
            leftTabSelect={() => select('shortTerm')}
            rightTabSelect={() => select('longTerm')}
            rightTabSelected={selected === 'longTerm'}
            leftTabSelected={selected === 'shortTerm'}
          />
          <View style={{ height: hp(515) }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: hp(30) }}>
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem />
              <BillItem last />
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
        render={<NewBill />}
      />
    </>
  );
};

export default BillList;
