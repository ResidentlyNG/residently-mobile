import React from 'react';
import { Image as Img, StyleSheet, View } from 'react-native';
import { White } from './Colors';
import { hp, wp } from './utils';

export const MainView = (props) => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

export const Image = ({ source, style }) => (
  <Img source={source} style={style} resizeMode="contain" />
);

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: White,
    width: wp(339),
    height: hp(674),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
});
