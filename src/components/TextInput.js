import React from 'react';
import { StyleSheet, TextInput as Input, View } from 'react-native';
import { AthensGray } from './Colors';
import { hp, wp } from './utils';

const TextInput = ({
  icon,
  inputStyle,
  onChangeText,
  placeholder,
  value,
  style,
}) => {
  return (
    <View style={[styles.view, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

export { TextInput };

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(264),
    height: hp(52),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: AthensGray,
  },
  iconContainer: {
    height: hp(52),
    width: wp(40.9),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: AthensGray,
  },
  input: {
    width: wp(223),
    height: hp(52),
    paddingLeft: wp(10),
  },
});
