import React, { useState } from 'react';
import { View } from 'react-native';
// import Slider from 'react-native-smooth-slider';
import { Slider } from 'react-native-elements';
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
  // TextInput,
  Whisper,
  White,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import { processBill as styles } from './styles';
import { hp, NairaFormat, wp } from '../../../components/utils';
import { abeg, bank, host, paystack } from '../../../../assets/images';
import { DatePicker } from '../../../components/DatePicker';
import { Calendar, Chevrolet } from '../../../../assets/svgs';

const PaymentCard = ({ amount }) => (
  <View style={styles.paymentView}>
    <View style={styles.cardGrid}>
      <Image source={host} style={styles.host} />
      <RegularText title="You" style={styles.hostName} />
      <View style={styles.amountInput}>
        <ParagraphText
          title={NairaFormat(amount / 3)}
          style={styles.splitAmount}
        />
      </View>
      <View style={styles.quotaView}>
        <ParagraphText title="34%" style={styles.quota} />
      </View>
    </View>
  </View>
);

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

const ProcessBill = ({ title }) => {
  const [amount, setAmount] = useState(30);
  const [duedate, setDuedate] = useState('');
  const [modal, setModal] = useState(false);
  const currentAmount = Math.round(amount);
  const formattedAmount = NairaFormat(amount);

  return (
    <View style={styles.background}>
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
        <PaymentCard amount={amount} />
        <PaymentCard amount={amount} />
        <PaymentCard amount={amount} />
        <View style={styles.dateInput}>
          <View style={styles.calendar}>
            <Calendar />
          </View>
          <View style={styles.dateView}>
            <ParagraphText title="Due Date" style={styles.dateLabel} />
            <DatePicker
              placeholder="DD/MM/YYYY"
              date={duedate}
              dateStyle={{
                height: hp(28),
              }}
              // futureDate
              handleDateChange={(date) => setDuedate(date)}
            />
          </View>
        </View>
        <ActionButton
          title="Proceed"
          style={styles.splitButton}
          onPress={() => setModal(true)}
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
    </View>
  );
};

export default ProcessBill;
