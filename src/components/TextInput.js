import React from 'react';
import { StyleSheet, TextInput as Input, View } from 'react-native';
import { Calendar, Dropdown } from '../../assets/svgs';
import { Heather } from './Colors';
import { DatePicker } from './DatePicker';
import { ParagraphText } from './Text';
import { hp, wp } from './utils';

const TextInput = ({
  icon,
  inputStyle,
  onChangeText,
  placeholder,
  value,
  style,
  label,
  keyboardType,
  noIcon,
}) => {
  return (
    <View style={[styles.view, style]}>
      {!noIcon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={noIcon ? styles.textView : {}}>
        <ParagraphText title={label} style={styles.label} />
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export const DateInput = ({ label, dueDate, setDuedate }) => (
  <View style={styles.dateInput}>
    <View style={styles.calendar}>
      <Calendar />
    </View>
    <View style={styles.dateView}>
      <ParagraphText title={label} style={styles.dateLabel} />
      <DatePicker
        placeholder="DD/MM/YYYY"
        date={dueDate}
        dateStyle={{
          height: hp(28),
        }}
        // futureDate
        handleDateChange={(date) => setDuedate(date)}
      />
    </View>
    <View style={styles.dropdown}>
      <Dropdown />
    </View>
  </View>
);

export { TextInput };

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(324),
    height: hp(64),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Heather,
    // backgr
  },
  iconContainer: {
    height: hp(64),
    width: wp(40.9),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: AthensGray,
  },
  input: {
    width: wp(223),
    height: hp(42),
    paddingLeft: wp(10),
  },
  label: {
    marginLeft: wp(10),
    marginTop: hp(4),
  },
  textView: {
    marginLeft: wp(10),
  },

  dateInput: {
    width: wp(325),
    height: hp(64),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Heather,
    // backgroundColor: CatskillWhite,
    marginTop: hp(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendar: {
    marginLeft: wp(24),
  },
  dateView: {
    marginLeft: wp(16),
  },
  dropdown: {
    position: 'absolute',
    right: 19,
  },
});
