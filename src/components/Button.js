import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button as Btn } from 'react-native-elements';
import { ForwardArrow } from '../../assets/svgs';
import { AzureRadiance, Green, Polar, White } from './Colors';
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
    <View style={styles.largeActionRow}>
      <View />
      <ParagraphText
        title={title}
        style={[
          styles.largeActionButtonTitle,
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

export const ButtonWithIcon = ({ icon, onPress, title, titleStyle, style }) => (
  <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
    <View style={styles.actionRow}>
      <View style={styles.buttonLeftIcon}>{icon}</View>
      <ParagraphText
        title={title}
        style={[styles.actionButtonTitle, titleStyle]}
      />
      {/* <View style={styles.buttonIcon}>{icon}</View> */}
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
  largeButtonLeftIcon: {
    left: wp(25),
    position: 'absolute',
  },
  largeActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  largeActionButtonTitle: {
    fontSize: 16,
    color: White,
    fontFamily: 'Inter-Medium',
  },

  iconButton: {
    width: wp(204),
    height: hp(47),
    backgroundColor: AzureRadiance,
    marginTop: hp(27),
    borderRadius: 16,
  },
  buttonLeftIcon: {
    left: wp(13),
    // position: 'absolute',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: wp(158),
  },
  actionButtonTitle: {
    fontSize: 16,
    color: White,
    fontFamily: 'Inter-Medium',
  },
});
