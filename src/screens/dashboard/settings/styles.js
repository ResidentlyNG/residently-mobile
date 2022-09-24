import { StyleSheet } from 'react-native';
import {
  Alabaster,
  AthensGray,
  Green,
  Heather,
  Midnight,
  Monza,
  ScienceBlue,
  Scorpion,
  White,
  WhiteLilac,
  WoodSmoke,
} from '../../../components';
import { circle, hp, notchTopPad, wp } from '../../../components/utils';

export const settings = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: White,
  },
  darkHeaderBg: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: WoodSmoke,
    height: hp(252),
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    // bottom: 0,
  },

  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(331),
    marginTop: notchTopPad || hp(13),
  },
  profileImageView: circle(49, White),
  profileImage: circle(46),
  usernameView: {
    marginLeft: wp(11),
  },
  fullname: {
    fontSize: 20,
    color: White,
  },
  username: {
    fontSize: 14,
    color: WhiteLilac,
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

  logoutView: {
    marginTop: hp(21),
    paddingLeft: wp(24),
    backgroundColor: '#F9FAFC',
    paddingVertical: 15,
    borderRadius: 10,
  },
  logout: {
    color: Monza,
  },
});

export const personal = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  darkHeaderBg: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: WoodSmoke,
    height: hp(252),
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    // bottom: 0,
  },
  headerTitle: {
    color: White,
  },

  profileArc: {
    width: wp(109),
    height: wp(109),
    borderRadius: wp(109) / 2,
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: -67,
    alignSelf: 'center',
  },
  profileView: {
    width: wp(96.8),
    height: wp(96.8),
    backgroundColor: WoodSmoke,
    borderRadius: wp(96.8) / 2,
  },
  profile: {
    width: wp(96.8),
    height: wp(96.83),
  },
  mainView: {
    width: wp(310),
    backgroundColor: White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(103),
    flex: 1,
    elevation: 4,
    paddingTop: 35,
  },
  titleBox: {
    height: hp(39),
    width: '100%',
    backgroundColor: WhiteLilac,
    marginTop: hp(24),
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(14),
    color: WoodSmoke,
    marginLeft: wp(30),
  },
  detail: {
    fontSize: hp(14),
    color: WoodSmoke,
    fontFamily: 'Inter-Regular',
    marginLeft: wp(30),
    marginTop: wp(12),
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
  // background: {
  //   flex: 1,
  //   backgroundColor: '#FAFAFA',
  //   alignItems: 'center',
  // },

  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: Alabaster,
  },
  mainImageBg: {
    width: '100%',
    height: '122%',
    position: 'absolute',
    bottom: 10,
  },
  plusView: circle(31, ScienceBlue),

  darkHeaderBg: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: ScienceBlue,
    height: hp(252),
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    // bottom: 0,
  },
  headerTitle: {
    color: White,
  },

  blockView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(297),
    marginTop: hp(29),
  },
  blockRoom: {
    fontSize: 26,
    color: White,
    // lineHeight: 19,
    marginTop: 13,
  },
  billsCount: {
    fontSize: 13,
    color: White,
    marginTop: 12,
  },
  profileGroup: {
    width: wp(95),
    height: hp(42),
    marginTop: 22,
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

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 58,
    paddingHorizontal: 13,
    width: '100%',
    // marginBottom: 10,
  },
  mainTitle: {
    fontSize: 20,
    color: WoodSmoke,
  },

  roleCard: {
    width: wp(340),
    backgroundColor: White,
    height: hp(82),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AthensGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(20),
    paddingHorizontal: 18,
    elevation: 1,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
    backgroundColor: Heather,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionProfile: {
    marginLeft: 15,
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
  profileBorder: circle(48, '#dfe5ec', {
    justifyContent: 'center',
    alignItems: 'center',
  }),
  profile: circle(43, Heather, {
    justifyContent: 'center',
    alignItems: 'center',
  }),

  noFlatmatesView: {
    height: hp(400),
    width: wp(308),
    backgroundColor: White,
    borderRadius: 25,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRoommatesHeader: {
    color: WoodSmoke,
    marginHorizontal: wp(65),
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
  noRoommatesText: {
    color: WoodSmoke,
    marginHorizontal: wp(23),
    marginTop: 22,
    lineHeight: 18,
    textAlign: 'center',
  },
  noRoommatesButton: {
    width: wp(250),
    height: 47,
    backgroundColor: ScienceBlue,
    marginTop: 29,
  },
});
