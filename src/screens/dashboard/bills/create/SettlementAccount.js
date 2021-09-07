import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { bank } from '../../../../../assets/images';
import { Bank, Chevrolet } from '../../../../../assets/svgs';
import {
  Header,
  HeaderText,
  Image,
  ModalBlur,
  RegularText,
  TextInput,
  White,
} from '../../../../components';
import { hp, wp } from '../../../../components/utils';
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

const BanksModal = ({ data }) => (
  <View style={styles.view}>
    <HeaderText title="Select Bank?" style={styles.modalLeadText} />
    <Merchant
      source={bank}
      imageStyle={styles.account}
      merchant="Account Number"
      bgColor="#FBEEEA"
    />
  </View>
);

const SettlementAccount = () => {
  const [modal, setModal] = useState(true);
  const { banks } = useSelector((state) => state.wallet);
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
            <BanksModal data={banks} setModal={(value) => setModal(value)} />
          }
        />
      </View>
    </>
  );
};

export default SettlementAccount;
