import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { houseBill } from '../../../../assets/images';
import { ForwardArrow } from '../../../../assets/svgs';
import {
  BillIcon,
  Green,
  HeaderText,
  Image,
  ParagraphText,
  RegularText,
} from '../../../components';
import { NairaFormat } from '../../../components/utils';
import { utils as styles } from './styles';

const BillItem = ({ bill, last }) => {
  const amount = NairaFormat(bill.amount);
  return (
    <TouchableOpacity
      style={styles.billItem}
      onPress={() => Actions.bill({ data: bill })}>
      <View style={styles.itemRow}>
        <BillIcon
          icon={<Image source={houseBill} style={styles.billIcon} />}
          backgroundColor={'rgba(0, 200, 148, 0.1)'}
        />
        <View style={styles.billRow}>
          <View>
            <ParagraphText title={bill.title} style={styles.billTitle} />
            <HeaderText title={amount} style={styles.billAmount} />
          </View>
          <View style={styles.timeFrame}>
            <View style={styles.timeDot} />
            <RegularText title="2 weeks" style={styles.billDate} />
          </View>
        </View>
      </View>
      {!last ? <View style={styles.billDivider} /> : null}
    </TouchableOpacity>
  );
};

export const BillGroup = ({ type, data }) => {
  const seeAll = data.length > 4;
  return (
    <View style={styles.billContainer}>
      <View style={styles.topRow}>
        <HeaderText title={`${type} Bills`} style={styles.billHeader} />
        {seeAll ? (
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={() => Actions.bill_list()}>
            <RegularText title="See All" style={styles.seeAll} />
            <View style={styles.arrow}>
              <ForwardArrow fill={Green} />
            </View>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.billContent}>
        {!data.length ? (
          <View style={styles.noBillView}>
            <RegularText title={`You do not have any ${type} bill`} />
          </View>
        ) : (
          data.map((item) => <BillItem key={item.id} bill={item} />)
        )}
      </View>
    </View>
  );
};
