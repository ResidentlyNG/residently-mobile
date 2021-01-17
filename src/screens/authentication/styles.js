import { StyleSheet } from 'react-native';
import {
  AthensGray,
  Green,
  Midnight,
  MineShaft,
  Roman,
  White,
  WhiteLilac,
} from '../../components';
import { hp, wp } from '../../components/utils';

export const getStartedStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: Green,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(40),
    // width: wp(311),
  },
  mainView: {
    marginTop: hp(35),
  },
  header: {
    fontSize: 22,
    color: White,
    marginLeft: wp(5),
  },
  rocket: {
    width: wp(134),
    height: hp(134),
    marginTop: hp(73),
  },
  welcome: {
    fontSize: 30,
    color: MineShaft,
    width: wp(175),
    marginTop: hp(26),
    textAlign: 'center',
    lineHeight: 37,
  },
  subText: {
    width: wp(216),
    fontSize: 12,
    textAlign: 'center',
    marginTop: hp(21),
    lineHeight: 18,
  },
  button: {
    marginTop: hp(21),
  },
  declineButton: {
    backgroundColor: Roman,
    marginTop: hp(20),
  },
});

export const loginStyles = StyleSheet.create({
  ...getStartedStyles,
  mainView: {
    marginTop: hp(35),
    alignItems: 'center',
    backgroundColor: WhiteLilac,
  },
  loginCard: {
    width: wp(302),
    height: hp(386),
    borderRadius: 15,
    // marginTop: hp(80),
    // elevation: 6,
    alignItems: 'center',
    backgroundColor: White,
    shadowOffset: { width: 0, height: 24 },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    // shadowOpacity: 1.0,
  },
  login: {
    fontSize: 25,
    color: Midnight,
    marginTop: hp(53),
  },
  usernameInput: {
    marginTop: hp(25),
  },
  passwordInput: {
    marginTop: hp(14),
  },
  button: {
    width: wp(264),
    marginTop: hp(19),
  },
  forgotText: {
    color: Roman,
    fontSize: 12,
    marginTop: hp(29),
  },

  socialsCard: {
    width: wp(302),
    height: hp(96),
    borderRadius: 16,
    backgroundColor: White,
    marginTop: hp(15),
    alignItems: 'center',
  },
  socialsText: {
    color: Green,
    fontSize: 15,
    marginTop: hp(8),
  },
  socialsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(196),
    marginTop: hp(6),
  },
  socialsCircle: {
    width: wp(46),
    height: wp(46),
    borderRadius: wp(46) / 2,
    backgroundColor: White,
    borderWidth: 1,
    borderColor: AthensGray,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  google: {
    width: wp(22),
    height: hp(22),
  },
  facebook: {
    width: wp(24),
    height: hp(24),
  },
  twitter: {
    width: wp(25.4),
    height: hp(25.4),
  },
  bottomText: {
    marginTop: hp(22),
    fontSize: 16,
  },
  signUpText: {
    fontSize: 16,
    color: Green,
    fontFamily: 'Grahik-Medium',
  },
});
