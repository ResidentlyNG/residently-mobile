import React from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import {
  cable,
  houseBill,
  profileGroup,
  walletBg,
  fundBill,
} from '../../../../assets/images';
import { BalanceEye, Cross, ForwardArrow } from '../../../../assets/svgs';
import {
  BillIcon,
  DodgerBlue,
  Green,
  Header,
  Image,
  Monza,
  ParagraphText,
  RegularText,
  SemiBoldText,
  White,
} from '../../../components';
import { wallet as styles } from './styles';

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross fill={DodgerBlue} />
  </View>
);

const TransactionItem = ({ icon, title, amount, amountColor }) => (
  <>
    <View style={styles.billRow}>
      <BillIcon icon={<Image source={icon} style={styles.billIcon} />} />
      <View style={styles.billBlock}>
        <View style={styles.detailRow}>
          <ParagraphText title={title} style={styles.billTitle} />
          <SemiBoldText
            title={amount}
            style={[styles.billAmount, { color: amountColor || Green }]}
          />
        </View>
        <View style={styles.detailTime}>
          <RegularText title="23/05/2021" style={styles.billDate} />
          <RegularText title="06:00 pm" style={styles.billDate} />
        </View>
      </View>
    </View>
    <View style={styles.billDivider} />
  </>
);

const Wallet = () => {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={DodgerBlue} barStyle="light-content" />
      <View style={styles.headerView}>
        <View style={styles.minisBgContainer}>
          <Image source={walletBg} style={styles.minisBg} resizeMode="cover" />
        </View>
        <Header
          title="Wallet"
          titleStyle={{ color: White }}
          iconFill={White}
          rightComponent={<ButtonPlus />}
        />
        <View style={styles.balanceCard}>
          <RegularText title="Your Balance" style={styles.balanceTitle} />
          <View style={styles.balanceView}>
            <ParagraphText title="₦ 40,000.83" style={styles.balance} />
            <View style={styles.eyeView}>
              <BalanceEye />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <RegularText title="Fund Wallet" style={styles.buttonTitle} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.jointWalletContainer}>
        <View style={styles.jointWalletView}>
          <View style={styles.jointWalletGrid}>
            <Image source={profileGroup} style={styles.profileGroup} />
            <View style={styles.jointBalanceView}>
              <RegularText
                title="Joint Wallet Balance:"
                style={styles.jointText}
              />
              <View style={styles.balanceView}>
                <ParagraphText
                  title="₦ 350,000.00"
                  style={styles.jointBalance}
                />
                <View style={styles.eyeView}>
                  <BalanceEye />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.leadRow}>
        <ParagraphText title="Transaction History" style={styles.yourBills} />
        <TouchableOpacity style={styles.seeAllButton}>
          {/* onPress={() => Actions.bill_list()}> */}
          <RegularText title="See All" style={styles.seeAll} />
          <View style={styles.arrow}>
            <ForwardArrow fill={Green} />
          </View>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default Wallet;
