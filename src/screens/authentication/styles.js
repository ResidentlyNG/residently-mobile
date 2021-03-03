import { StyleSheet } from 'react-native';
import {
  AthensGray,
  Green,
  Midnight,
  MineShaft,
  Roman,
  ScienceBlue,
  Scorpion,
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
    color: MineShaft,
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
    // flex: 1,
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

export const createAccountStyles = StyleSheet.create({
  ...getStartedStyles,
  ...loginStyles,
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: MineShaft,
  },
  loginCard: {
    width: wp(302),
    height: hp(450),
    borderRadius: 15,
    // marginTop: hp(80),
    // elevation: 6,
    alignItems: 'center',
    backgroundColor: White,
    shadowOffset: { width: 0, height: 24 },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    // shadowOpacity: 1.0,
  },
  createAccount: {
    fontSize: 25,
    color: Midnight,
    marginTop: hp(33),
  },
  socialsCard: {
    width: wp(302),
    height: hp(96),
    borderRadius: 16,
    backgroundColor: White,
    marginTop: hp(22),
    alignItems: 'center',
  },
  bottomText: {
    marginTop: hp(16),
    textAlign: 'center',
    fontSize: 16,
  },
  signUpText: {
    fontSize: 16,
    color: Green,
    fontFamily: 'Graphik-Semibold',
  },
});

export const userInfoStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: White,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  mainIcon: {
    marginTop: hp(20),
  },
  leadText: {
    fontSize: 30,
    marginTop: hp(82.9),
    lineHeight: 37,
    textAlign: 'center',
    width: wp(313),
    color: MineShaft,
  },
  userCard: {
    width: wp(338),
    height: hp(354),
    borderRadius: 14,
    // marginTop: hp(80),
    // elevation: 6,
    alignItems: 'center',
    backgroundColor: White,
    shadowOffset: { width: 0, height: 24 },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(259),
  },
  roleCard: {
    width: wp(294),
    height: hp(97),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: ScienceBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(37),
  },
  host: {
    width: wp(70),
    height: hp(70),
  },
  arrowBox: {
    width: wp(18.1),
    height: hp(17),
    borderRadius: 5,
    backgroundColor: ScienceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: Scorpion,
  },
  detail: {
    fontSize: 11,
    width: wp(149),
    color: 'rgba(0, 0, 0, 0.3)',
  },
  noteLead: {
    marginTop: hp(33),
    alignSelf: 'center',
    color: Midnight,
    fontSize: 14,
  },
  note: {
    width: wp(269),
    alignSelf: 'center',
    marginTop: hp(8),
    textAlign: 'center',
    lineHeight: 18,
    color: 'rgba(35, 35, 35, 0.3)',
  },
});

export const inviteStyles = StyleSheet.create({
  ...loginStyles,
  searchView: {
    width: wp(309),
    height: hp(46),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AthensGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(20),
    marginTop: hp(8),
  },
  // topRow: {
  //   ...loginStyles.topRow,

  // }
  header: {
    fontSize: 22,
    color: White,
    marginLeft: wp(5),
    width: wp(200),
    textAlign: 'center',
    marginTop: hp(18),
  },
  topRow: {
    alignItems: 'center',
    marginTop: hp(40),
    // width: wp(311),
  },
  mainView: {
    marginTop: hp(25),
    height: hp(614),
  },
  residentTitle: {
    fontSize: 14,
    color: Midnight,
    marginTop: hp(45),
    // marginLeft: wp(17),
  },
  searchInput: {
    width: wp(285),
    marginLeft: wp(6),
    height: hp(46),
  },
  contactsTitle: {
    fontSize: 14,
    color: Midnight,
    marginTop: hp(25),
    alignSelf: 'flex-start',
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(285),
  },
  roleCard: {
    width: wp(309),
    height: hp(71),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AthensGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(37),
  },
  host: {
    width: wp(52),
    height: hp(52),
  },
  tickBox: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(14) / 2,
    backgroundColor: Green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(14) / 2,
    borderColor: AthensGray,
    borderWidth: 1,
    // backgroundColor: AthensGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionProfile: {
    marginLeft: wp(5),
  },
  title: {
    fontSize: 15,
    color: Scorpion,
  },
  detail: {
    fontSize: 10,
    width: wp(165),
    color: 'rgba(0, 0, 0, 0.3)',
  },
});

export const inviteSuccess = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: White,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  mainIcon: {
    marginTop: hp(20),
  },
  leadText: {
    fontSize: 30,
    marginTop: hp(82.9),
    lineHeight: 37,
    textAlign: 'center',
    width: wp(313),
    color: MineShaft,
  },
  userCard: {
    width: wp(338),
    height: hp(354),
    borderRadius: 14,
    // marginTop: hp(110),
    // elevation: 6,
    alignItems: 'center',
    backgroundColor: White,
    shadowOffset: { width: 0, height: 24 },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
  },
  profileGroup: {
    width: wp(141.46),
    height: hp(63),
    marginTop: hp(60),
  },
  inviteMessage: {
    marginTop: hp(24),
    width: wp(313),
    fontSize: 30,
    color: Midnight,
    textAlign: 'center',
    lineHeight: 37,
  },
  button: {
    alignSelf: 'center',
    marginTop: hp(42),
  },
});

export const setUp = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: ScienceBlue,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  topRow: {
    alignItems: 'center',
    marginTop: hp(40),
    // width: wp(311),
  },
  header: {
    marginTop: hp(10),
    fontSize: 30,
    color: White,
  },
  mainView: {
    marginTop: hp(35),
    height: hp(635),
  },
  profileGroup: {
    width: wp(141.46),
    height: hp(63),
    marginTop: hp(24),
  },
  subText: {
    fontSize: 15,
    width: wp(151),
    marginTop: hp(21),
    textAlign: 'center',
    color: Midnight,
    lineHeight: 18,
  },
  backgroundCard: {
    width: wp(304),
    height: hp(388),
    backgroundColor: 'rgba(0, 0, 0, 0.0001)', // White,
    alignItems: 'center',
    marginTop: hp(20),
  },
  billContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(318),
    height: hp(81),
    borderRadius: 13,
    backgroundColor: '#F1F1F1', // 'rgba(0, 0, 0, 0.04)', // White,
    // elevation: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: wp(18),
    paddingRight: wp(20),
    width: wp(299),
    height: hp(65),
    borderRadius: 13,
    backgroundColor: White,
    elevation: 3,
  },
  billImage: {
    width: wp(46),
    height: wp(46),
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionProfile: {
    marginLeft: wp(5),
  },
  title: {
    fontSize: 15,
    color: Scorpion,
  },
  detail: {
    fontSize: 10,
    width: wp(165),
    color: 'rgba(0, 0, 0, 0.3)',
  },
  arrowBox: {
    width: wp(18.1),
    height: hp(17),
    borderRadius: 5,
    backgroundColor: ScienceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billCard: {
    marginTop: hp(20),
  },
  button: {
    marginTop: hp(15),
    width: wp(204),
    height: hp(48),
    backgroundColor: '#ccfff1',
    borderColor: Green,
    borderWidth: 1,
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: Green,
  },
});
