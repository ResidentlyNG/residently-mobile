import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  cable,
  cashBill,
  flashBill,
  houseBill,
} from '../../../../../assets/images';
// import { Actions } from 'react-native-router-flux';
import { BoldCross, MiniForwardChevrolet } from '../../../../../assets/svgs';
import {
  ActionButton,
  Coral,
  DodgerBlue,
  Green,
  Header,
  Image,
  ParagraphText,
} from '../../../../components';
import { hp } from '../../../../components/utils';
import { createBill as styles } from '../styles';

const BillCard = ({ image, onPress, color, title, style }) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.billContainer, style]}>
      <View style={styles.innerContainer}>
        <View style={styles.sectionRow}>
          <Image source={image} style={styles.billImage} />
          <ParagraphText title={title} style={styles.title} />
        </View>
        <View style={[styles.arrowBox, { backgroundColor: color }]}>
          <MiniForwardChevrolet />
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </>
);

const CreateBill = () => {
  // const [bill, setBill] = useState('');
  return (
    <View style={styles.background}>
      <Header title="Create a bill" />
      <View style={styles.mainCard}>
        <ParagraphText title="Most Common Bills" style={styles.mainText} />
        <BillCard
          image={houseBill}
          color={Green}
          title="House Rent"
          style={{ marginTop: hp(29) }}
        />
        <BillCard image={cashBill} color={Coral} title="Service Charge" />
        <BillCard image={flashBill} color={Green} title="Electricity Bill" />
        <BillCard image={cable} color={DodgerBlue} title="Cable TV" />
      </View>

      <ActionButton
        title="Create a Custom Bill"
        style={styles.button}
        icon={<BoldCross />}
        onPress={() => Actions.name_bill()}
      />
    </View>
  );
};

export default CreateBill;
