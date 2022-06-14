import React from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import {
  // cable,
  // houseBill,
  profileGroup,
  walletBg,
  fundBill,
} from '../../../../assets/images';
import { BalanceEye, ForwardArrow } from '../../../../assets/svgs';
import {
  BillIcon,
  Button,
  DodgerBlue,
  Green,
  Header,
  Image,
  Midnight,
  Monza,
  ParagraphText,
  RegularText,
  SemiBoldText,
  White,
} from '../../../components';
import { wallet as styles } from './styles';
import { NairaFormat } from '../../../components/utils';

// const ButtonPlus = () => (
//   <View style={styles.plusView}>
//     <Cross fill={DodgerBlue} />
//   </View>
// );

export const TransactionItem = ({
  icon,
  title,
  amount,
  amountColor,
  date,
  time,
}) => (
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
          <RegularText title={date} style={styles.billDate} />
          <RegularText title={time} style={styles.billDate} />
        </View>
      </View>
    </View>
    <View style={styles.billDivider} />
  </>
);

const Wallet = () => {
  const {
    wallet: { wallet },
    profile: { home, profile },
    transactions: { transactions },
  } = useSelector((state) => state);

  const balance = NairaFormat(wallet?.balance || 0);
  const seeAll = transactions.length > 4;
  const noHome = !profile.home_id;
  return (
    <View style={styles.background}>
      <StatusBar
        backgroundColor={noHome ? Midnight : DodgerBlue}
        barStyle="light-content"
      />
      {!profile.home_id ? (
        <View style={styles.noHomeView}>
          <RegularText
            title="You have not setup a home yet."
            style={styles.noHome}
          />
          <RegularText
            title="you need to setup a home before you can create a bill."
            style={styles.noHomeSub}
          />
          <Button
            title="Setup your home"
            style={styles.noHomeButton}
            onPress={() => Actions.home_setup()}
          />
        </View>
      ) : (
        <>
          <View style={styles.headerView}>
            <View style={styles.minisBgContainer}>
              <Image
                source={walletBg}
                style={styles.minisBg}
                resizeMode="cover"
              />
            </View>
            <Header
              title="Wallet"
              titleStyle={{ color: White }}
              iconFill={White}
              // rightComponent={<ButtonPlus />}
              noBackIcon
            />
            <View style={styles.balanceCard}>
              <RegularText title="Your Balance" style={styles.balanceTitle} />
              <View style={styles.balanceView}>
                <ParagraphText
                  title={NairaFormat(balance)}
                  style={styles.balance}
                />
                <View style={styles.eyeView}>
                  <BalanceEye />
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Actions.select_wallet()}>
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
                      title={NairaFormat(home?.account?.balance || 0)}
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
            <ParagraphText
              title="Recent Transactions"
              style={styles.yourBills}
            />
            {seeAll ? (
              <TouchableOpacity
                style={styles.seeAllButton}
                onPress={() => Actions.transactions()}>
                <RegularText title="See All" style={styles.seeAll} />
                <View style={styles.arrow}>
                  <ForwardArrow fill={Green} />
                </View>
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
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
          /> */}
          {transactions.slice(0, 4).map((item) => {
            const title =
              item?.narration || (item.type === 'credit' ? 'Topup' : item.type);
            const date = moment(item.created_at).format('DD/MM/YYYY');
            const time = moment(item.created_at).format('LT');
            return (
              <TransactionItem
                key={item.id}
                title={title}
                amount={NairaFormat(item.amount)}
                icon={fundBill}
                date={date}
                time={time}
                amountColor={item.type === 'credit' ? Green : Monza}
              />
            );
          })}
        </>
      )}
    </View>
  );
};

export default Wallet;
