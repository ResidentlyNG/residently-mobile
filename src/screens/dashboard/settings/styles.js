import { StyleSheet } from 'react-native';
import {
  AthensGray,
  Midnight,
  MineShaft,
  Scorpion,
  White,
  WhiteLilac,
  WoodSmoke,
} from '../../../components';
import { circle, hp, wp } from '../../../components/utils';

export const settings = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
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
    // backgroundColor: Green,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    position: 'absolute',
  },

  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    width: 42,
    height: 39,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(37),
  },
  menuTitle: {
    fontSize: 14,
    color: Midnight,
    marginLeft: wp(18),
  },
  chevrolet: {
    alignItems: 'center',
    justifyContent: 'center',
    right: wp(35),
    position: 'absolute',
  },

  menuContainer: {
    width: wp(322),
    paddingTop: hp(18),
    paddingBottom: hp(18),
    // height: hp(79),
    justifyContent: 'center',
    backgroundColor: '#F9FAFC',
    marginTop: hp(31),
    borderRadius: 20,
  },
  divider: {
    backgroundColor: AthensGray,
    height: 1,
    width: wp(286),
    marginTop: hp(15),
    marginBottom: hp(15),
    alignSelf: 'center',
  },
});

export const personal = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  mainView: {
    width: wp(355),
    backgroundColor: White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(15),
    flex: 1,
    elevation: 4,
  },
  titleBox: {
    height: hp(48),
    width: '100%',
    backgroundColor: WhiteLilac,
    marginTop: hp(29),
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: WoodSmoke,
    marginLeft: wp(30),
  },
  detail: {
    fontSize: 14,
    color: WoodSmoke,
    marginLeft: wp(30),
    marginTop: wp(28),
  },
  divider: {
    width: wp(309),
    height: 1,
    backgroundColor: WhiteLilac,
    alignSelf: 'center',
    marginTop: hp(15),
  },
});

export const myHome = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
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
  mainView: {
    width: wp(355),
    backgroundColor: White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(28),
    flex: 1,
    elevation: 4,
  },
});
