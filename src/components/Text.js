import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Colors from './Colors';
import { hp } from './utils';

export const HeaderText = ({ style, title }) => (
  <Text style={[styles.headerTextStyle, style]}>{title}</Text>
);

export const ParagraphText = ({ onPress, style, title }) => (
  <Text style={[styles.paragraphTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

export const SemiBoldText = ({ onPress, style, title }) => (
  <Text style={[styles.semiboldTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

export const RegularText = ({ onPress, style, title }) => (
  <Text style={[styles.regularTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

export const RegularDouble = ({ subTitle, onPress, style, title }) => (
  <Text style={[styles.regularTextStyle, style]}>
    {title}
    <Text style={styles.regularDouble} onPress={onPress}>
      {subTitle}
    </Text>
  </Text>
);

export const ParagraphDouble = ({ title, subTitle, onPress }) => (
  <Text style={styles.paragraphTextStyle}>
    {title}
    <Text style={styles.paragraphDouble} onPress={onPress}>
      {subTitle}
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  headerTextStyle: {
    fontFamily: 'Inter-Bold',
    fontSize: hp(30),

    color: Colors.BostonBlue,
  },
  paragraphTextStyle: {
    fontFamily: 'Inter-Medium',
    fontSize: hp(14),
    color: Colors.WoodSmoke,
  },
  semiboldTextStyle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: hp(13),
    color: '#628195',
  },
  regularTextStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: hp(12),

    color: Colors.WoodSmoke,
  },
  regularDouble: {
    color: Colors.WoodSmoke,
  },
  paragraphDouble: {
    color: Colors.WoodSmoke,
  },
});
