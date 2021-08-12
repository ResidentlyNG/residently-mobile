import { StyleSheet } from 'react-native';
import {
  Green,
  MineShaft,
  White,
  GullGray,
  AquaHaze,
  DodgerBlue,
  Midnight,
  Monza,
  Scorpion,
  WoodSmoke,
  ClearDay,
  WildSand,
  ForgetMeNot,
  WhiteLilac,
} from '../../../components';
import { circle, hp, wp } from '../../../components/utils';

export const home = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    // paddingBottom: hp(50),
  },
  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(331),
    marginTop: hp(13),
  },
  profileImage: circle(46),
  usernameView: {
    marginLeft: wp(11),
  },
  fullname: {
    fontSize: 20,
    color: MineShaft,
  },
  username: {
    fontSize: 14,
    color: Scorpion,
  },
  bell: {
    width: wp(42),
    height: hp(41),
    borderRadius: 10,
    backgroundColor: Green,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    position: 'absolute',
  },

  coliving: {
    width: wp(331),
    height: hp(346),
    borderRadius: 10,
    backgroundColor: ClearDay,
    marginTop: hp(30),
  },
  doMore: {
    width: wp(319),
    height: hp(195),
    bottom: 0,
    position: 'absolute',
  },
  welcome: {
    fontSize: 14,
    marginLeft: wp(26),
    color: WoodSmoke,
    marginTop: hp(10),
  },
  colivingText: {
    fontSize: 20,
    marginLeft: wp(26),
    lineHeight: 25,
    color: WoodSmoke,
    marginTop: hp(10),
  },
  readMore: {
    width: wp(91),
    height: hp(20),
    backgroundColor: Green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(26),
    marginTop: hp(14),
  },
  readMoreText: {
    fontSize: 10,
    color: White,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  scroll: {
    height: '80%',
    paddingBottom: hp(50),
  },

  houseExpenses: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: WoodSmoke,
    marginTop: hp(30),
    marginLeft: wp(22),
  },
  expenseBlock: {
    width: wp(331),
    height: hp(430),
    backgroundColor: White,
    marginTop: hp(59),
    alignItems: 'center',
    borderRadius: 20,
    // paddingLeft: wp(14),
    // paddingRight: wp(14),
  },
  blockView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(297),
    marginTop: hp(29),
  },
  blockRoom: {
    fontSize: 14,
    color: WoodSmoke,
  },
  billsCount: {
    fontSize: 12,
    color: WoodSmoke,
  },
  profileGroup: {
    width: wp(95),
    height: hp(42),
  },

  leadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(42),
    width: wp(297),
  },
  yourBills: {
    fontSize: 16,
    color: MineShaft,
  },
  seeAllButton: {
    height: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: Green,
  },

  billItem: {
    width: wp(297),
    height: hp(71),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: White,
    borderRadius: 10,
    elevation: 2,
    marginTop: hp(16),
    paddingLeft: wp(12),
    paddingRight: wp(12),
  },
  billAmount: {
    fontSize: 15,
    color: MineShaft,
  },
  billTitle: {
    fontSize: 13,
    color: MineShaft,
  },
  billDate: {
    fontSize: 13,
    color: MineShaft,
  },
  billRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(7),
  },
  billDivider: {
    width: wp(286),
    height: 1,
    backgroundColor: WildSand,
    marginTop: hp(11),
  },
  billIcon: {
    width: wp(40),
    height: wp(40),
  },
  billBlock: {
    marginLeft: wp(13),
  },

  miniWrapper: {
    width: wp(331),
    height: hp(314),
    backgroundColor: ForgetMeNot,
    borderRadius: 10,
    position: 'relative',
    marginTop: hp(30),
  },
  minisBgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  minisBg: {
    width: wp(330),
    height: hp(271),
  },
  miniImageWrapper: {
    width: wp(292),
    height: hp(150),
    borderRadius: 20,
    backgroundColor: White,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(20),
  },
  miniImageContainer: {
    borderRadius: 20,
    width: wp(272),
    borderWidth: 15,
    borderColor: White,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(20),
    height: hp(150),
  },
  miniImage: {
    // width: wp(272),
    height: hp(128),
  },

  miniLeadText: {
    fontSize: 15,
    color: WoodSmoke,
    marginLeft: wp(33),
    marginTop: hp(11),
    lineHeight: 17,
  },

  moreToComeView: {
    marginLeft: wp(22),
    marginTop: hp(30),
    marginBottom: hp(50),
  },
  viewCard: {
    width: wp(175),
    height: hp(182),
    borderRadius: 20,
    marginRight: wp(17),
    backgroundColor: WhiteLilac,
  },
  roomie: {
    width: wp(175),
    height: hp(182),
  },
  homeOwner: {
    width: wp(126),
    height: hp(137),
  },
  roomieText: {
    fontSize: 14,
    color: WoodSmoke,
    marginTop: hp(16),
  },
  roomieSubText: {
    marginTop: hp(7),
    color: GullGray,
    lineHeight: 20.5,
    width: wp(170),
  },

  noHomeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noHome: {
    color: Midnight,
    textAlign: 'center',
    fontSize: 15,
  },
  noHomeSub: {
    color: Midnight,
    textAlign: 'center',
    marginTop: hp(7),
  },
  button: {
    width: wp(230),
    marginTop: hp(15),
  },
});

export const homeEX = StyleSheet.create({
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
    marginTop: hp(26),
    width: wp(323),
    justifyContent: 'space-between',
  },
  userImage: {
    width: wp(46),
    height: wp(46),
    borderRadius: wp(46) / 2,
  },
  menuView: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(40) / 2,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    alignSelf: 'flex-start',
    color: '#F5F5F5',
    marginTop: hp(21),
    marginLeft: wp(22),
  },
  username: {
    fontSize: 25,
    alignSelf: 'flex-start',
    color: White,
    marginLeft: wp(32),
  },
  mainCard: {
    width: wp(344),
    height: hp(444),
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    marginTop: hp(14),
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileGroup: {
    width: wp(79),
    height: hp(35),
    // marginTop: hp(13),
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    width: wp(182),
    height: hp(81),
    borderRadius: 14,
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletView: {
    width: wp(155),
    height: hp(81),
    borderRadius: 14,
    backgroundColor: White,
    justifyContent: 'center',
  },
  title: {
    lineHeight: 19,
    fontSize: 11,
    color: MineShaft,
    marginLeft: wp(7),
    // marginTop: hp(13),
  },
  walletTitle: {
    lineHeight: 19,
    fontSize: 11,
    color: MineShaft,
    marginLeft: wp(21),
    // marginTop: hp(13),
  },
  amount: {
    fontSize: 16,
    color: Green,
    // marginTop: hp(5),
    marginLeft: wp(21),
  },
  availableText: {
    fontSize: 10,
    color: GullGray,
    marginLeft: wp(21),
  },

  billsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(278),
    alignSelf: 'center',
    marginTop: hp(35),
  },
  leadBills: {
    fontSize: 16,
    color: MineShaft,
  },
  seeAll: {
    fontSize: 13,
    color: Green,
  },

  rentCard: {
    width: wp(286),
    height: hp(55),
    borderRadius: 9,
    backgroundColor: Green,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(20),
  },
  cardBadge: {
    width: wp(35.8),
    height: wp(35.8),
    borderRadius: wp(35.8) / 2,
    backgroundColor: '#00b383',
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    width: wp(14),
    height: hp(18),
  },
  cardMainGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(266),
    alignSelf: 'center',
    // marginTop: hp(35),
  },
  cardGrid: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    width: wp(218),
    // alignSelf: 'center',
    // marginTop: hp(35),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  billTitle: {
    fontSize: 11,
    color: White,
  },
  billAmountTitle: {
    fontSize: 11,
    color: White,
  },
  billStatus: {
    fontSize: 11,
    color: White,
  },
  billAmount: {
    fontSize: 12,
    color: White,
  },

  electricityCard: {
    width: wp(286),
    height: hp(55),
    borderRadius: 9,
    backgroundColor: White,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(20),
    borderWidth: 1,
    borderColor: DodgerBlue,
  },
  flash: {
    width: wp(14.7),
    height: hp(20),
  },
  lightCardBadge: {
    width: wp(35.8),
    height: wp(35.8),
    borderRadius: wp(35.8) / 2,
    backgroundColor: AquaHaze,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBillTitle: {
    fontSize: 11,
    color: Midnight,
  },
  lightBillAmountTitle: {
    fontSize: 11,
    color: GullGray,
  },
  lightBillStatus: {
    fontSize: 11,
    color: GullGray,
  },
  lightBillAmount: {
    fontSize: 12,
    color: Green,
  },

  netflixCard: {
    width: wp(286),
    height: hp(55),
    borderRadius: 9,
    backgroundColor: White,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(20),
    borderWidth: 1,
    borderColor: Monza,
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
