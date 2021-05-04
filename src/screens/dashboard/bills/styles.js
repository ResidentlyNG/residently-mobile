import { StyleSheet } from 'react-native';
import {
  AzureRadiance,
  DodgerBlue,
  Green,
  MineShaft,
  RadicalRed,
  White,
  WildSand,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: Green,
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
    fontFamily: 'Graphik-Regular',
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
    backgroundColor: DodgerBlue,
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
