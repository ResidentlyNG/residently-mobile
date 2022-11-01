import { StyleSheet } from 'react-native';
import {
  CatskillWhite,
  CodGray,
  Green,
  Heather,
  Midnight,
  MineShaft,
  Mirage,
  Roman,
  White,
  WhiteLilac,
  WoodSmoke,
} from '../../../../components';
import { hp, wp } from '../../../../components/utils';

export const nameBill = StyleSheet.create({
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
    fontSize: 22,
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
    marginTop: hp(160),
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: Roman,
  },
});

export const planStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: MineShaft,
  },
  mainView: {
    width: wp(331),
    height: hp(395),
    borderRadius: 20,
    alignItems: 'center',
    marginTop: hp(54),
    backgroundColor: White,
    elevation: 5,
  },
  profileGroup: {
    width: wp(95),
    height: hp(42),
  },
  host: {
    width: wp(42),
    height: hp(42),
  },
  leadText: {
    fontSize: 14,
    marginTop: hp(25),
  },
  amount: {
    fontSize: 20,
  },
  billType: {
    fontSize: 14,
  },

  planCard: {
    width: wp(297),
    height: hp(71),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Heather,
    justifyContent: 'center',
    marginTop: hp(13),
    paddingLeft: wp(23),
    paddingRight: wp(23),
  },
  planRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'space-between',
  },
  active: {
    borderColor: Green,
    borderWidth: 1.5,
  },
  button: {
    marginTop: hp(62),
  },
});

export const duration = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
  },
  tabContainer: {
    marginTop: hp(44),
    marginBottom: hp(45),
  },
  input: {
    marginTop: hp(20),
  },
  frequencyView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(324),
    marginTop: hp(20),
  },
  frequencyInput: {
    width: wp(200),
    // alignSelf: 'flex-start',
    // marginLeft: wp(25),
  },
  frquencyTitle: {
    color: 'black',
    fontSize: 16,
    marginLeft: wp(15),
  },
  frequencyInfo: {
    color: CodGray,
    width: wp(200),
    marginTop: hp(7),
    alignSelf: 'flex-start',
    marginLeft: wp(26),
  },
  buttonView: {
    position: 'absolute',
    bottom: 220,
  },
});

export const recipient = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  mainView: {
    width: wp(331),
    height: hp(381),
    borderRadius: 20,
    backgroundColor: White,
    elevation: 4,
    marginTop: hp(54.3),
    paddingLeft: 29,
  },
  leadText: {
    width: wp(215),
    color: WoodSmoke,
    fontSize: 20,
    marginTop: hp(40),
  },
  subText: {
    width: wp(274),
    fontSize: 14,
    marginTop: hp(18),
  },

  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WhiteLilac,
    width: wp(271),
    height: hp(62),
    borderRadius: 10,
    marginTop: hp(18),
  },
  iconView: {
    width: 42,
    height: 39,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(14),
    backgroundColor: White,
  },
  menuTitle: {
    fontSize: 14,
    color: Midnight,
    marginLeft: wp(18),
  },
  chevrolet: {
    alignItems: 'center',
    justifyContent: 'center',
    right: wp(14),
    position: 'absolute',
  },
});

export const settlement = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  mainView: {
    width: wp(355),
    flex: 1,
    borderRadius: 20,
    backgroundColor: White,
    elevation: 4,
    marginTop: hp(54.3),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  leadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(40),
    marginLeft: wp(22),
  },
  leadText: {
    width: wp(215),
    color: WoodSmoke,
    fontSize: 20,
    marginLeft: 12,
  },
  subText: {
    width: wp(300),
    fontSize: 14,
    marginTop: hp(18),
    marginLeft: wp(22),
  },
  input: {
    width: wp(325),
    marginTop: hp(15),
    alignSelf: 'center',
  },

  view: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  nameInput: {
    marginTop: hp(15),
    minHeight: hp(55),
  },
  loader: {
    marginTop: hp(30),
  },
  modalLeadText: {
    marginTop: hp(40),
    color: Mirage,
    fontSize: 25,
    width: wp(302),
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
  merchant: {
    fontSize: 14,
    color: Midnight,
    marginLeft: wp(18),
  },

  bank: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: CatskillWhite,
  },
  buttonView: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
