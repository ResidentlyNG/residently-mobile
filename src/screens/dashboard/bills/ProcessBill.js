import React, { useState } from 'react';
import { View } from 'react-native';
// import Slider from 'react-native-smooth-slider';
import { Slider } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import {
  ActionButton,
  Green,
  Header,
  HeaderText,
  Image,
  MainView,
  ParagraphText,
  RegularText,
  SemiBoldText,
  TextInput,
  // TextInput,
  Whisper,
  White,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import { processBill as styles } from './styles';
import { hp, NairaFormat, truncate, wp } from '../../../components/utils';
import { abeg, bank, paystack } from '../../../../assets/images';
import { Chevrolet } from '../../../../assets/svgs';
import showToast from '../../../components/Toast';

const PaymentCard = ({ amount, user, updateAmount, percent }) => {
  return (
    <View style={styles.paymentView}>
      <View style={styles.cardGrid}>
        {/* <Image source={host} style={styles.host} /> */}
        <RegularText
          title={truncate(user.username, 20)}
          style={styles.hostName}
        />
        <TextInput
          value={String(amount)}
          onChangeText={(value) => updateAmount(value)}
          placeholder="Enter amount"
          style={[styles.amountInput]} // , titleError && styles.errorBorder]}
          noIcon
          keyboardType={'number-pad'}
        />
        <View style={styles.quotaView}>
          <ParagraphText title={`${percent}%`} style={styles.quota} />
        </View>
      </View>
    </View>
  );
};

const Merchant = ({ source, imageStyle, merchant, bgColor }) => (
  <View style={[styles.merchantView, bgColor && { backgroundColor: bgColor }]}>
    <View style={styles.merchantLogoBox}>
      <Image source={source} style={imageStyle} />
    </View>
    <RegularText title={merchant} style={styles.merchant} />
    <View style={styles.chevrolet}>
      <Chevrolet />
    </View>
  </View>
);

const PaymentModal = () => (
  <View style={styles.view}>
    <HeaderText
      title="Where would you like to pay your bill to?"
      style={styles.modalLeadText}
    />
    <Merchant source={abeg} imageStyle={styles.abeg} merchant="Abeg" />
    <Merchant
      source={paystack}
      imageStyle={styles.paystack}
      merchant="Paystack"
      bgColor="#E8F7FE"
    />
    <Merchant
      source={bank}
      imageStyle={styles.account}
      merchant="Account Number"
      bgColor="#FBEEEA"
    />
  </View>
);

const ProcessBill = ({ data }) => {
  const [amount, setAmount] = useState(data?.bill || 30000);
  const [modal, setModal] = useState(false);

  const { home } = useSelector((state) => state.profile);
  const defaultAmount = amount / home.users.length;
  const userState = {};
  const map = new Map();
  home.users.map((user) => {
    map.set(user.username, user.id);
    return Object.assign(userState, { [user.username]: defaultAmount });
  });
  const [userAmounts, setUserAmounts] = useState(userState);

  const currentAmount = Math.round(amount);
  const formattedAmount = NairaFormat(amount);
  const { title } = data;

  const handleBill = () => {
    const amountSum = Object.values(userAmounts).reduce(
      (a, b) => Number(a) + Number(b),
      0,
    );
    if (amountSum !== Number(amount)) {
      showToast('Total amount must be equal to Bill amount', 'error');
    } else {
      const users = Object.keys(userAmounts).map((user) => ({
        id: String(map.get(user)),
        amount: String(userAmounts[user]),
      }));
      const payload = {
        ...data,
        users,
      };
      Actions.duration({ data: payload });
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.background}>
      {/* <View> */}
      <Header title={title || 'Custom Bill'} />
      <MainView style={styles.mainView}>
        <View style={styles.amountView}>
          <ParagraphText title="Enter Amount" style={styles.amountLabel} />
          <SemiBoldText title={`${formattedAmount}`} style={styles.amount} />
        </View>
        <Slider
          style={styles.slider}
          value={amount}
          onValueChange={(value) => {
            setAmount(value);
          }}
          thumbStyle={styles.thumb}
          minimumValue={0}
          maximumValue={500000}
          minimumTrackTintColor={Green}
          maximumTrackTintColor={Whisper}
          useNativeDriver={true}
          allowTouchTrack
          thumbProps={{
            children: (
              <View>
                <View />
                <ParagraphText
                  title={currentAmount}
                  style={{
                    color: Green,
                    width: wp(150),
                    marginTop: hp(50),
                    textAlign: 'center',
                  }}
                />
              </View>
            ),
          }}
        />
        <View style={styles.paymentRow}>
          <ParagraphText title="Split Payment" style={styles.splitText} />
          <RegularText title="Even split" style={styles.evenSplit} />
        </View>
        {home.users.map((user) => {
          const amt = userAmounts[user.username];
          const percent = Math.round((amt / amount) * 100);
          const updateAmount = (value) => {
            setUserAmounts({ ...userAmounts, [user.username]: value });
          };
          console.log(amt);
          return (
            <PaymentCard
              key={user.id}
              user={user}
              amount={amt}
              percent={percent}
              updateAmount={updateAmount}
            />
          );
        })}
        <ActionButton
          title="Proceed"
          style={styles.splitButton}
          onPress={() => handleBill()}
        />
      </MainView>
      <ModalBlur
        visible={modal}
        hasBackdrop
        style={{
          height: hp(500),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: wp(375),
          backgroundColor: White,
          alignSelf: 'center',
          bottom: -hp(25),
        }}
        fixed
        onBackdropPress={() => setModal(false)}
        render={<PaymentModal />}
      />
      {/* </View> */}
    </KeyboardAwareScrollView>
  );
};

export default ProcessBill;
