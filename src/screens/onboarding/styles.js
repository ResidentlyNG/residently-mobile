import { StyleSheet } from 'react-native';
import { White } from '../../components';
import { hp, wp } from '../../components/utils';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  onboardingBackground: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    position: 'absolute',
    bottom: 0,
  },
  imageBg: {
    width: wp(344), // '100%', // wp(503.15), // 184
    height: hp(345), // '100%', // hp(558), // hdp('18%'),, // 142
    marginTop: hp(457),
    position: 'absolute',
    bottom: 0,
    marginLeft: wp(31),
  },
  secondImageBg: {
    width: '100%', // wp(503.15), // 184
    height: '100%', // hp(558), // hdp('18%'),, // 142
    // marginTop: hp(457),
    position: 'absolute',
    bottom: 0,
    // marginLeft: wp(31),
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(30),
    width: wp(311),
  },
  skipButton: {
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontSize: 17,
    color: White,
  },
  onboardingImage: {
    width: wp(183),
    height: hp(182),
  },
  imageWrapper: {
    width: wp(183),
    height: wp(183),
    borderRadius: wp(206) / 2,
    backgroundColor: White,
  },
  imageView: {
    width: wp(206),
    height: wp(206),
    borderRadius: wp(206) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: White,
    width: wp(160),
    textAlign: 'center',
    marginTop: hp(26),
    lineHeight: 36,
    fontFamily: 'Inter-Medium',
  },
  text: {
    color: White,
    textAlign: 'center',
    alignSelf: 'center',
    width: wp(238),
    marginTop: hp(15),
    fontSize: 14,
  },
  buttonContainer: {
    width: wp(70),
    height: wp(70),
    borderRadius: wp(70) / 2,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: hp(33),
  },
});
