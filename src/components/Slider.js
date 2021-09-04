import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider as RNESlider } from 'react-native-elements';
import { Green, Whisper } from './Colors';
import { ParagraphText } from './Text';
import { circle, hp, wp } from './utils';

const Thumb = ({ currentAmount }) => (
  <View>
    <View />
    <ParagraphText title={currentAmount} style={styles.thumbTitle} />
  </View>
);

export const Slider = ({ amount, currentAmount, setAmount }) => (
  <RNESlider
    style={styles.slider}
    value={amount}
    onValueChange={(value) => {
      setAmount(value);
    }}
    thumbStyle={styles.thumb}
    minimumValue={0}
    maximumValue={500000}
    minimumTrackTintColor={Green}
    maximumTrackTintColor={Whisper}
    useNativeDriver={true}
    allowTouchTrack
    thumbProps={{
      children: <Thumb currentAmount={currentAmount} />,
    }}
  />
);

const styles = StyleSheet.create({
  slider: {
    width: wp(314),
    height: hp(20),
    marginTop: hp(20),
  },
  thumb: circle(16, Green, {
    borderWidth: 1,
    borderColor: '#FFF4F4',
    elevation: 5,
  }),
  thumbTitle: {
    color: Green,
    width: wp(150),
    marginTop: hp(50),
    textAlign: 'center',
  },
});
