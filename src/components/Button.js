import React from 'react';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Button as Btn } from 'react-native-elements';
import { Green, White } from './Colors';
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
    />
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    width: wp(319),
    height: hp(64),
    backgroundColor: Green,
    borderRadius: 16,
  },
  lightButton: {
    backgroundColor: 'rgba(0, 201, 149, 0.1)',
    borderWidth: 1,
    borderColor: Green,
  },
  lightTitle: {
    color: Green,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Graphik-Medium',
  },
});
