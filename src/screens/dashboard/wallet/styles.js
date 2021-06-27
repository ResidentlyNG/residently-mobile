import { StyleSheet } from 'react-native';
import {
  Alabaster,
  ClearDay,
  DodgerBlue,
  Green,
  MineShaft,
  White,
  WildSand,
  WoodSmoke,
} from '../../../components';
import { circle, hp, wp } from '../../../components/utils';

export const wallet = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Alabaster,
    alignItems: 'center',
  },
  headerView: {
    width: wp(375),
    height: hp(230),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: DodgerBlue,
    alignItems: 'center',
  },
  plusView: circle(31, White),
  minisBgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  minisBg: {
    width: wp(330),
    height: hp(271),
  },

  balanceCard: {
    width: wp(321),
    height: hp(112),
    borderRadius: 29,
    backgroundColor: White,
    marginTop: hp(18),
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 11,
    marginTop: hp(12),
    color: MineShaft,
  },
  balanceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 25,
    color: MineShaft,
  },
  button: {
    width: wp(91),
    height: hp(24),
    backgroundColor: Green,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
  },
  buttonTitle: {
    color: White,
    fontSize: 12,
  },
  eyeView: {
    marginLeft: wp(12),
  },

  jointWalletContainer: {
    width: wp(325),
    height: hp(109),
    backgroundColor: White,
    borderRadius: 20,
    elevation: 5,
    marginTop: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  jointWalletView: {
    width: wp(306),
    height: hp(96),
    backgroundColor: ClearDay,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jointWalletGrid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileGroup: {
    width: wp(88),
    height: hp(39),
  },
  jointText: {
    fontSize: 14,
    color: WoodSmoke,
  },
  jointBalance: {
    fontSize: 14,
    color: WoodSmoke,
  },
  jointBalanceView: {
    marginLeft: wp(17),
  },

  leadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(42),
    width: wp(330),
    marginBottom: hp(5),
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

  billAmount: {
    fontSize: 15,
    color: MineShaft,
  },
  billTitle: {
    fontSize: 14,
    color: MineShaft,
  },
  billDate: {
    fontSize: 12,
    color: MineShaft,
  },
  billRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(325),
    marginTop: hp(15),
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(7),
  },
  billDivider: {
    width: wp(325),
    height: 1,
    backgroundColor: WildSand,
    marginTop: hp(15),
  },
  billIcon: {
    width: wp(40),
    height: wp(40),
  },
  billBlock: {
    width: wp(271),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
