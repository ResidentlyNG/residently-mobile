import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  gtbank,
  profileGroup,
  secondScreenBg,
} from '../../../../assets/images';
import { Edit, Insight } from '../../../../assets/svgs';
import {
  Green,
  Header,
  HeaderText,
  Image,
  MineShaft,
  ParagraphText,
  RegularText,
  White,
} from '../../../components';
import { NairaFormat } from '../../../components/utils';
import { bill as styles } from './styles';

const Bill = (props) => {
  const { title, amount } = props.data;
  const totalAmount = NairaFormat(amount);

  return (
    <ImageBackground
      style={styles.background}
      source={secondScreenBg}
      imageStyle={styles.imageBg}
      resizeMode="stretch">
      <StatusBar barStyle="light-content" backgroundColor={MineShaft} />
      <Header
        title={title}
        titleStyle={styles.header}
        iconFill={White}
        backPress={() => Actions.dashboard({ type: 'reset', bills: true })}
        // noBackIcon={props.type === 'reset'}
      />
      <View style={styles.mainView}>
        <View style={styles.amountView}>
          <ParagraphText title="Total amount" style={styles.amountTitle} />
          <HeaderText title={totalAmount} style={styles.amount} />
          <Image source={profileGroup} style={styles.profileGroup} />
          <View style={styles.shareView}>
            <ParagraphText title="Your Share" style={styles.shareText} />
            <HeaderText title="₦ 76,000.00" style={styles.personalAmount} />
            <View style={styles.rateView}>
              <RegularText title="35%" style={styles.rate} />
            </View>
          </View>
          <View style={styles.insightRow}>
            <Insight fill={Green} />
            <ParagraphText title="View Insight" style={styles.insight} />
          </View>
        </View>
        <ParagraphText
          title="Payment would be made into"
          style={styles.paymentTitle}
        />
        <View style={styles.bankView}>
          <Image source={gtbank} style={styles.gtbank} />
          <View>
            <ParagraphText title="0928735625 - GTB" style={styles.account} />
            <RegularText title="John Snow" style={styles.accountName} />
          </View>
          <View style={styles.editRow}>
            <Edit />
            <RegularText title="Change" style={styles.change} />
          </View>
        </View>

        <View style={styles.dateRow}>
          <RegularText title="Due Date:" style={styles.dateTitle} />
          <ParagraphText title="December 27th, 2020" style={styles.date} />
        </View>
        <View style={styles.dateRow}>
          <RegularText title="Payment Date:" style={styles.dateTitle} />
          <ParagraphText title="December 27th, 2020" style={styles.date} />
        </View>
        <View style={styles.dateRow}>
          <RegularText title="Time:" style={styles.dateTitle} />
          <ParagraphText title="06:00pm" style={styles.date} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Bill;
