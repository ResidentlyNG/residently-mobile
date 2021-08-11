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
import { circle, hp, wp } from '../../components/utils';

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
  top: {
    alignItems: 'center',
    marginTop: hp(40),
    // width: wp(311),
  },
  mainView: {
    marginTop: hp(48),
    backgroundColor: White,
    height: hp(464),
    width: wp(355),
    borderRadius: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: MineShaft,
    marginTop: hp(55),
  },
  rocket: {
    width: wp(134),
    height: hp(134),
    marginTop: hp(73),
  },
  welcome: {
    fontSize: 27,
    color: White,
    width: wp(268),
    marginTop: hp(26),
    textAlign: 'center',
    lineHeight: 37,
  },
  subText: {
    width: wp(268),
    fontSize: 12,
    textAlign: 'center',
    marginTop: hp(10),
    lineHeight: 18,
    color: White,
  },

  thumbBackground: {
    // flex: 1,
    alignItems: 'center',
    height: hp(255), // '100%', // hdp(758),
    width: wp(163), // '100%', // wdp(375),
    backgroundColor: Green,
    marginTop: hp(24),
  },
  thumbBg: {
    width: wp(163),
    height: hp(255),
  },
  button: {
    marginTop: hp(20),
  },
  declineButton: {
    backgroundColor: Roman,
    marginTop: hp(20),
  },

  socialsCard: {
    width: wp(302),
    height: hp(110),
    borderRadius: 16,
    backgroundColor: WhiteLilac,
    marginTop: hp(29),
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
    marginTop: hp(12),
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
    fontFamily: 'Inter-Regular',
  },
  signUpText: {
    fontSize: 16,
    color: Green,
    fontFamily: 'Inter-Medium',
    fontWeight: '600',
  },
});

export const loginStyles = StyleSheet.create({
  ...getStartedStyles,
  mainView: {
    marginTop: hp(75),
    backgroundColor: White,
    height: hp(672),
    width: wp(355),
    borderRadius: 20,
    alignItems: 'center',
  },
  iconView: {
    marginTop: hp(44),
  },
  header: {
    fontSize: 27,
    color: MineShaft,
    marginTop: hp(46),
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
    // width: wp(264),
    marginTop: hp(30),
  },
  forgotText: {
    color: Roman,
    fontSize: 15,
    marginTop: hp(20),
  },

  socialsCard: {
    width: wp(302),
    height: hp(110),
    borderRadius: 16,
    backgroundColor: WhiteLilac,
    marginTop: hp(29),
    alignItems: 'center',
  },
  socialsText: {
    color: MineShaft,
    fontSize: 15,
    marginTop: hp(8),
  },
  socialsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(196),
    marginTop: hp(12),
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
  mainView: {
    marginTop: hp(33),
    backgroundColor: White,
    height: hp(485),
    width: wp(355),
    borderRadius: 20,
    alignItems: 'center',
  },
  createAccount: {
    fontSize: 25,
    color: White,
    marginTop: hp(23),
    textAlign: 'center',
  },
  header: {
    fontSize: 15,
    color: White,
    lineHeight: 25,
    marginTop: hp(24),
    textAlign: 'center',
  },
  socialsCard: {
    width: wp(302),
    height: hp(110),
    borderRadius: 16,
    backgroundColor: WhiteLilac,
    marginTop: hp(20),
    alignItems: 'center',
  },
  bottomText: {
    marginTop: hp(25),
    textAlign: 'center',
    fontSize: 16,
    color: White,
  },
  signUpText: {
    fontSize: 16,
    color: Green,
    fontFamily: 'Inter-Semibold',
  },
});

export const createPassword = StyleSheet.create({
  ...createAccountStyles,
  createAccount: {
    ...createAccountStyles.createAccount,
  },
  mainView: {
    marginTop: hp(46),
    backgroundColor: White,
    height: hp(380),
    width: wp(355),
    borderRadius: 20,
    alignItems: 'center',
  },

  termsContainer: {
    width: wp(335),
    height: hp(582),
    backgroundColor: White,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  celebrationContainer: {
    position: 'absolute',
    top: 0,
  },
  celebration: {
    width: wp(365),
    height: hp(412),
  },

  outerThumbCircle: circle(148, Green, {
    marginTop: hp(83),
  }),
  thumbCircle: circle(126, White),
  thumb: {
    width: wp(91),
    height: hp(85),
  },
  termsHeader: {
    fontSize: 30,
    color: MineShaft,
    width: wp(160),
    marginTop: hp(31),
    lineHeight: 37,
  },
  termsText: {
    fontSize: 13,
    width: wp(261),
    marginTop: hp(13),
    color: MineShaft,
    textAlign: 'center',
  },
  termsButton: {
    width: wp(309),
    marginTop: hp(26),
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
    // height: '100%', // hdp(758),
    // width: '100%', // wdp(375),
    // backgroundColor: ScienceBlue,
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
    // marginTop: hp(35),
    // height: hp(635),
  },
  profileGroup: {
    width: wp(141.46),
    height: hp(63),
    marginTop: hp(24),
  },
  headerText: {
    fontSize: 32,
    marginTop: hp(56),
    color: MineShaft,
  },
  subText: {
    fontSize: 18,
    width: wp(292),
    marginTop: hp(21),
    textAlign: 'center',
    color: Midnight,
    lineHeight: 24,
  },
  backgroundCard: {
    // width: wp(304),
    // height: hp(388),
    // backgroundColor: 'rgba(0, 0, 0, 0.0001)', // White,
    alignItems: 'center',
    marginTop: hp(20),
  },
  billContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(318),
    height: hp(81),
    borderRadius: 13,
    backgroundColor: White, // '#F1F1F1', // 'rgba(0, 0, 0, 0.04)'
    elevation: 8,
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
    elevation: 8,
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

export const join = StyleSheet.create({
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
    alignItems: 'center',
    marginTop: hp(80),
    // width: wp(311),
  },
  mainView: {
    marginTop: hp(35),
    width: wp(338),
    height: hp(345),
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: White,
    width: wp(300),
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 37,
    marginTop: hp(29),
  },
  rocket: {
    width: wp(92.5),
    height: hp(76.4),
    marginTop: hp(19),
  },
  subText: {
    fontSize: 14,
    color: Midnight,
    width: wp(170),
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 18,
  },
  input: {
    width: wp(231),
    height: hp(48),
    borderWidth: 1,
    borderColor: AthensGray,
    backgroundColor: '#F5F5F5', // White,
    paddingLeft: wp(15),
    marginTop: hp(21),
  },
  button: {
    marginTop: hp(17),
    width: wp(231),
    height: hp(48),
    borderRadius: 6,
    alignSelf: 'center',
  },
  resendText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 15,
  },
  resend: {
    color: Green,
    textDecorationLine: 'underline',
  },
});
