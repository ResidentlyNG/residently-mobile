import { StyleSheet } from 'react-native';
import {
  AthensGray,
  AzureRadiance,
  CatskillWhite,
  CodGray,
  Deyser,
  DodgerBlue,
  Green,
  Heather,
  MidGray,
  Midnight,
  MineShaft,
  Mirage,
  Polar,
  RadicalRed,
  ScienceBlue,
  Scorpion,
  Shamrock,
  StormGray,
  Thunder,
  Tundora,
  White,
  WhiteLilac,
  WildSand,
  WoodSmoke,
} from '../../../components';
import { circle, hp, wp } from '../../../components/utils';

export const bills = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(331),
    marginTop: hp(13),
  },
  profileImage: circle(46),
  usernameView: {
    marginLeft: wp(11),
  },
  headerText: {
    fontSize: 20,
    color: MineShaft,
  },
  // fullname: {
  //   fontSize: 20,
  //   color: MineShaft,
  // },
  // username: {
  //   fontSize: 14,
  //   color: Scorpion,
  // },
  bell: {
    width: wp(42),
    height: hp(41),
    borderRadius: 10,
    backgroundColor: Green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insightContainer: {
    width: wp(331),
    height: hp(218),
    backgroundColor: Green,
    borderRadius: 20,
    // borderBottomLeftRadius: 20,
    borderWidth: 4,
    borderTopWidth: 0,
    borderColor: White,
    marginTop: hp(24),
    elevation: 5,
    alignItems: 'center',
  },
  walletView: {
    width: wp(331),
    height: hp(173),
    backgroundColor: White,
    borderRadius: 20,
    // borderBottomLeftRadius: 20,
    alignItems: 'center',
  },
  walletText: {
    fontSize: 14,
    color: MineShaft,
    marginTop: hp(28),
  },
  amount: {
    fontSize: 26,
    color: MineShaft,
  },
  divider: {
    width: wp(264.5),
    height: 1,
    backgroundColor: WildSand,
    marginTop: hp(14),
  },
  statsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(13),
  },
  outerSpentCircle: circle(28, White, {
    borderWidth: 3,
    borderColor: Green,
  }),
  stats: {
    marginLeft: wp(10),
  },
  statTitle: {
    fontSize: 12,
    color: MineShaft,
  },
  statAmount: {
    fontSize: 13,
    color: MineShaft,
  },
  verticalDivider: {
    marginLeft: wp(13),
    height: hp(36.5),
    width: 1,
    backgroundColor: WildSand,
  },
  balanceCircle: circle(28, White, {
    borderWidth: 3,
    borderColor: RadicalRed,
    marginLeft: wp(13),
  }),
  insightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(9),
  },
  insight: {
    fontSize: 14,
    color: White,
    marginLeft: wp(15),
  },

  leadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(42),
    width: wp(330),
  },
  yourBills: {
    fontSize: 16,
    color: MineShaft,
  },
  seeAllButton: {
    height: hp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(65),
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: Green,
  },
  arrow: {
    marginLeft: wp(7),
  },

  billsCard: {
    width: wp(332),
    height: hp(321),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 5,
    marginTop: hp(12),
    alignItems: 'center',
  },
  tabContainer: {
    marginTop: hp(12),
  },
  billItem: {
    width: wp(286),
    marginTop: hp(22),
  },
  profileGroup: {
    width: wp(55),
    height: hp(24),
    // marginTop: hp(13),
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
  plusView: circle(31, DodgerBlue),
  button: {
    width: wp(204),
    height: hp(47),
    backgroundColor: AzureRadiance,
    marginTop: hp(27),
    borderRadius: 16,
  },
  buttonTitle: {
    fontSize: 17,
    fontFamily: 'Inter-Regular',
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
    fontFamily: 'Grpahik-Medium',
  },
});

export const billList = StyleSheet.create({
  ...bills,
  background: {
    flex: 1,
    backgroundColor: White,
    alignItems: 'center',
  },
  billsCard: {
    width: wp(344),
    height: hp(702),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 5,
    marginTop: hp(12),
    alignItems: 'center',
  },
  tabContainer: {
    marginTop: hp(12),
  },
});

export const newBill = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
  },
  backArrow: {
    alignSelf: 'flex-start',
    marginLeft: wp(20),
    width: wp(30),
    height: wp(30),
    marginTop: hp(15),
    borderRadius: wp(30) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    color: MineShaft,
    alignSelf: 'flex-start',
    marginLeft: wp(26),
    marginTop: hp(5),
  },
  subText: {
    fontSize: 15,
    color: Tundora,
    width: wp(243),
    lineHeight: 21,
    alignSelf: 'flex-start',
    marginLeft: wp(26),
    marginTop: hp(10),
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(294),
  },
  roleCard: {
    width: wp(324),
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
    width: wp(200),
    color: 'rgba(0, 0, 0, 0.3)',
  },

  userHeaderText: {
    fontSize: 25,
    color: Mirage,
    alignSelf: 'flex-start',
    marginLeft: wp(30),
    marginTop: hp(30),
  },
  userSubText: {
    fontSize: 14,
    color: Midnight,
    alignSelf: 'flex-start',
    marginLeft: wp(30),
    marginTop: hp(20),
  },
  searchInput: {
    width: wp(285),
    marginLeft: wp(6),
    height: hp(46),
    borderWidth: 0,
  },
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
  contactsTitle: {
    fontSize: 14,
    color: Midnight,
    marginTop: hp(25),
    alignSelf: 'flex-start',
  },

  contactCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(285),
  },

  roleContactCard: {
    width: wp(309),
    height: hp(71),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AthensGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(37),
  },
  contactHost: {
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
});

export const customBill = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  mainView: {
    width: wp(355),
    height: hp(700),
    elevation: 6,
  },
  leadText: {
    fontSize: 25,
    color: WoodSmoke,
    width: wp(243),
    alignSelf: 'flex-start',
    marginLeft: wp(23),
    marginTop: hp(23),
  },
  leadInput: {
    marginTop: hp(26),
  },
  input: {
    marginTop: hp(20),
  },
  splitButton: {
    marginTop: hp(32),
  },
  individualButton: {
    marginTop: hp(18),
  },
});

export const processBill = StyleSheet.create({
  ...customBill,
  amountView: {
    width: wp(325),
    height: hp(64),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Heather,
    backgroundColor: CatskillWhite,
    marginTop: hp(27),
  },
  amountLabel: {
    fontSize: 14,
    color: StormGray,
    marginTop: hp(6),
    marginLeft: wp(31),
  },
  amount: {
    fontSize: 21,
    color: Mirage,
    // marginTop: hp(6),
    marginLeft: wp(31),
  },
  slider: {
    width: wp(314),
    height: hp(20),
    marginTop: hp(20),
    // backgroundColor: '#F0F0F0',
  },
  thumb: circle(16, Green, {
    borderWidth: 1,
    borderColor: '#FFF4F4',
    elevation: 5,
  }),

  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(44),
    width: wp(314),
  },
  splitText: {
    fontSize: 18,
    color: Midnight,
  },
  evenSplit: {
    color: Green,
    fontSize: 12,
  },

  paymentView: {
    width: wp(325),
    height: hp(74),
    borderRadius: 16,
    backgroundColor: White,
    elevation: 6,
    justifyContent: 'center',
    marginTop: hp(14),
  },
  cardGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  host: {
    width: wp(52),
    height: hp(52),
  },
  hostName: {
    fontSize: 12,
    color: MineShaft,
    marginLeft: wp(7),
    width: wp(30),
  },
  amountInput: {
    width: wp(165),
    height: hp(33),
    borderRadius: 6,
    backgroundColor: 'rgba(209, 218, 227, 0.09)',
    borderWidth: 1,
    borderColor: 'rgba(184, 184, 185, 0.11)',
    marginLeft: wp(7),
  },
  splitAmount: {
    color: Mirage,
    fontSize: 17,
    lineHeight: 28,
    marginLeft: wp(7),
  },
  quotaView: {
    width: wp(40),
    height: hp(33),
    borderWidth: 1,
    borderColor: Green,
    backgroundColor: Polar,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(5),
  },
  quota: {
    fontSize: 12,
    color: Shamrock,
  },

  dateInput: {
    width: wp(325),
    height: hp(64),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Heather,
    backgroundColor: CatskillWhite,
    marginTop: hp(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendar: {
    marginLeft: wp(24),
  },
  dateView: {
    marginLeft: wp(16),
  },

  view: {
    flex: 1,
    alignItems: 'center',
  },
  modalLeadText: {
    marginTop: hp(40),
    color: Mirage,
    fontSize: 25,
    width: wp(302),
  },
  merchantView: {
    width: wp(301),
    height: hp(62),
    borderRadius: 10,
    backgroundColor: 'rgba(117, 63, 246, 0.14)',
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  merchantLogoBox: {
    width: wp(42),
    height: hp(39),
    backgroundColor: WhiteLilac,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: wp(14),
  },
  abeg: {
    width: wp(15),
    height: hp(21),
  },
  merchant: {
    fontSize: 14,
    color: Midnight,
    marginLeft: wp(18),
  },
  chevrolet: {
    position: 'absolute',
    right: wp(22),
  },
  paystack: {
    width: wp(21),
    height: hp(21),
  },
  account: {
    width: wp(23),
    height: hp(23),
  },
});

export const createBill = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  mainCard: {
    width: wp(331),
    height: hp(430),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 5,
    marginTop: hp(45),
    alignItems: 'center',
  },
  mainText: {
    fontSize: 14,
    color: MineShaft,
    marginLeft: wp(26),
    marginTop: hp(20),
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: hp(45),
  },
  plusView: circle(31, White),

  billContainer: {
    width: wp(258),
    marginTop: hp(18),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: wp(286),
    height: 1,
    marginTop: hp(18),
    backgroundColor: WildSand,
  },
  billImage: {
    width: wp(46),
    height: wp(46),
  },
  title: {
    fontSize: 15,
    color: Thunder,
    marginLeft: wp(11),
  },
  arrowBox: {
    width: wp(18),
    height: hp(17),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const bill = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: White,
    alignItems: 'center',
  },
  mainView: {
    width: wp(341),
    height: hp(647),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 5,
    alignItems: 'center',
    marginTop: hp(20),
  },
  amountView: {
    width: wp(341),
    height: hp(360),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 7,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: 0.2,
    alignItems: 'center',
  },
  amountTitle: {
    marginTop: hp(36),
    color: MineShaft,
    fontSize: 18,
  },
  amount: {
    fontSize: 30,
    // marginTop: hp(14),
    color: Green,
  },
  profileGroup: {
    width: wp(76),
    height: hp(34),
  },

  shareView: {
    width: wp(269),
    height: hp(132),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 3,
    marginTop: hp(23),
    alignItems: 'center',
  },
  shareText: {
    marginTop: hp(10),
    color: MineShaft,
    fontSize: 14,
  },
  personalAmount: {
    marginTop: hp(5),
    color: MineShaft,
    fontSize: 18,
  },
  rateView: {
    marginTop: hp(19),
    borderWidth: 1,
    backgroundColor: Polar,
    borderColor: Green,
    width: wp(40.6),
    height: hp(33),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  rate: {
    fontSize: 12,
    color: Shamrock,
  },
  insightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(16),
  },
  insight: {
    fontSize: 14,
    color: Green,
    marginLeft: wp(14.7),
  },

  paymentTitle: {
    marginTop: hp(37),
    color: MineShaft,
    fontSize: 11,
  },
  bankView: {
    width: wp(276),
    height: hp(56),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Deyser,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: hp(9),
    marginBottom: hp(15),
  },
  gtbank: {
    width: wp(29.6),
    height: hp(30),
  },
  account: {
    fontSize: 12,
    color: MidGray,
  },
  accountName: {
    fontSize: 12,
    color: MidGray,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: hp(8),
  },
  change: {
    fontSize: 12,
    color: Green,
    marginLeft: wp(4),
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(10),
  },
  dateTitle: {
    fontSize: 12,
    color: CodGray,
    marginLeft: wp(17),
  },
  date: {
    fontSize: 12,
    color: MineShaft,
    marginLeft: wp(17),
  },
});
