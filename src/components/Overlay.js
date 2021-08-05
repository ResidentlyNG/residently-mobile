import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Modal from 'react-native-modal';
import { hp } from './utils';
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

export { ModalBlur };

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
});
