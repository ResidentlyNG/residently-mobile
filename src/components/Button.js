import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button as Btn } from 'react-native-elements';
import { ForwardArrow } from '../../assets/svgs';
import { Green, Polar, White } from './Colors';
import { ParagraphText } from './Text';
import { hp, wp } from './utils';

const Button = ({
  light,
  style,
  buttonStyle,
  disabled,
  disabledStyle,
  loading,
  onPress,
  title,
  titleStyle,
  icon,
  iconRight,
}) => {
  return (
    <Btn
      style={style}
      icon={icon}
      title={title}
      buttonStyle={[
        styles.button,
        light && styles.lightButton,
        style,
        buttonStyle,
      ]}
      loading={loading}
      titleStyle={[light ? styles.lightTitle : styles.title, titleStyle]}
      disabled={disabled}
      disabledStyle={disabledStyle || styles.disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      onPress={onPress}
      iconRight={iconRight || true}
      background={TouchableNativeFeedback.Ripple(White, false)}
      iconContainerStyle={styles.buttonIcon}
    />
  );
};

const ActionButton = ({
  icon,
  iconFill,
  light,
  onPress,
  style,
  title,
  titleStyle,
}) => (
  <TouchableOpacity
    style={[styles.button, light && styles.lightButton, style]}
    onPress={onPress}>
    <View style={styles.actionRow}>
      <View />
      <ParagraphText
        title={title}
        style={[
          styles.actionButtonTitle,
          light && styles.lightTitle,
          titleStyle,
        ]}
      />
      <View style={styles.buttonIcon}>
        {icon || <ForwardArrow fill={iconFill} />}
      </View>
    </View>
  </TouchableOpacity>
);

export { ActionButton, Button };

const styles = StyleSheet.create({
  button: {
    width: wp(319),
    height: hp(64),
    backgroundColor: Green,
    borderRadius: 16,
  },
  lightButton: {
    backgroundColor: Polar,
    borderWidth: 1,
    borderColor: Green,
  },
  lightTitle: {
    color: Green,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
  },
  buttonIcon: {
    right: wp(25),
    position: 'absolute',
  },
  buttonLeftIcon: {
    left: wp(25),
    position: 'absolute',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  actionButtonTitle: {
    fontSize: 16,
    color: White,
    fontFamily: 'Inter-Medium',
  },
});
