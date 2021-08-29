import { StyleSheet } from 'react-native';
import {
  Green,
  Heather,
  MineShaft,
  Roman,
  White,
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
  },
  tabContainer: {
    marginTop: hp(44),
    marginBottom: hp(45),
  },
  input: {
    marginTop: hp(20),
  },
  buttonView: {
    position: 'absolute',
    bottom: 220,
  },
});
