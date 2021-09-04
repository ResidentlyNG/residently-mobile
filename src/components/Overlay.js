import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Modal from 'react-native-modal';
import { hp } from './utils';
import * as Colors from './Colors';
// import { Overlay as Modal } from 'react-native-elements';

const ModalBlur = ({
  visible,
  onBackdropPress,
  style,
  render,
  hasBackdrop,
  fixed,
  // ...rest
}) => {
  return (
    <>
      {visible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          backdropOpacity={0.7}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <Modal
        isVisible={visible}
        hasBackdrop={hasBackdrop || false}
        backdropOpacity={0.6}
        animationInTiming={500}
        onBackdropPress={onBackdropPress}
        style={[styles.overlay, fixed && styles.fixed, style]}>
        {render}
      </Modal>
    </>
  );
};

const Spinner = ({ size, style }) => {
  return (
    <View style={[style, styles.spinnerStyle]}>
      <ActivityIndicator size={size || 'large'} color={Colors.Green} />
    </View>
  );
};

export const TransactionLoader = ({ backgroundGradient, style }) => {
  return (
    <View
      style={[
        styles.loader,
        backgroundGradient && { backgroundColor: backgroundGradient },
        style,
      ]}>
      <Spinner />
    </View>
  );
};

export { ModalBlur, Spinner };

const styles = StyleSheet.create({
  overlay: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  fixed: {
    position: 'absolute',
    bottom: -hp(10),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.TransparentWhite,
    position: 'absolute',
    zIndex: 4,
  },
});
