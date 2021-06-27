import { Platform, StyleSheet } from 'react-native';
import { heightPercentageToDP as hdp } from 'react-native-responsive-screen';
import {
  DodgerBlue,
  ForgetMeNot,
  Green,
  GullGray,
  MineShaft,
  PattensBlue,
  Scorpion,
  Tundora,
  White,
  WhiteLilac,
  WoodSmoke,
} from '../../components';
import { circle, hp, wp } from '../../components/utils';

const footerHeight = () => {
  const deviceHeight = hdp('100%');
  const iOS = Platform.OS === 'ios';
  if (deviceHeight > 700 && iOS) return 55;
  return 65;
};

export const dashboard = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: White,
  },
  footer: {
    height: footerHeight(),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 80,
  },
  footerTab: {
    flexDirection: 'row',
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(155, 132, 135, 0.142097)',
    paddingLeft: wp(10),
    paddingRight: wp(10),
    borderTopWidth: 2,
    // paddingBottom: Platform.OS === 'ios' && isIPhoneX() ? hp(18) : null,
  },
  homeButtons: {
    padding: 15,
  },
  activeButton: {
    width: wp(48),
    alignItems: 'center',
  },
  menuTitle: {
    color: GullGray,
    marginTop: hp(6),
  },
});

export const intro = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: MineShaft,
    fontSize: 24,
    lineHeight: 30,
    marginLeft: wp(21),
    marginTop: hp(25),
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
    right: wp(18),
    position: 'absolute',
  },

  mainView: {
    marginTop: hp(87),
    height: hp(680),
    position: 'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
    backgroundColor: White,
    width: '100%',
    zIndex: 40,
    alignItems: 'center',
  },
  billWrapper: {
    width: wp(332),
    height: hp(278),
    backgroundColor: PattensBlue,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    elevation: 5,
    marginTop: hp(25),
  },
  billsBgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  billsBg: {
    width: wp(353),
    height: hp(478),
  },

  heartHandContainer: {
    width: wp(276),
    height: hp(113),
    borderRadius: 20,
    borderWidth: 5,
    borderColor: White,
    backgroundColor: DodgerBlue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: hp(20),
    elevation: 12,
  },
  handHeart: {
    width: wp(203),
    height: hp(128),
    marginTop: hp(16),
  },
  billsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(25),
  },
  arrowIcon: {
    marginLeft: wp(16),
  },

  billsLeadText: {
    fontSize: 20,
    color: WoodSmoke,
    marginLeft: wp(51),
  },
  billsText: {
    fontSize: 15,
    color: Tundora,
    marginLeft: wp(51),
    width: wp(243),
    lineHeight: 21,
    marginTop: hp(5),
  },
  billsButton: {
    backgroundColor: DodgerBlue,
    width: wp(201),
    marginTop: hp(29),
    marginLeft: wp(51),
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(339),
    marginTop: hp(23),
  },
  miniContainer: {
    height: hp(192),
    width: wp(162),
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 25,
    marginTop: hp(15),
  },
  miniWrapper: {
    width: wp(156),
    height: hp(192),
    backgroundColor: ForgetMeNot,
    borderRadius: 20,
    position: 'relative',
  },
  minisBgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  minisBg: {
    // width: wp(313), // wp(127),
    // height: hp(252), // hp(56),
    width: wp(156),
    height: hp(181),
  },
  miniImageWrapper: {
    width: wp(131),
    height: hp(64),
    borderRadius: 10,
    backgroundColor: White,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(20),
  },
  miniImageContainer: {
    borderRadius: 10,
  },
  miniImage: {
    width: wp(127),
    height: hp(56),
  },

  miniLeadText: {
    fontSize: 15,
    color: WoodSmoke,
    marginLeft: wp(33),
    marginTop: hp(11),
    lineHeight: 17,
  },

  arrowView: {
    marginLeft: wp(32),
    marginTop: hp(21),
  },

  vibes: {
    width: wp(333),
    height: hp(64),
    borderRadius: 16,
    backgroundColor: WhiteLilac,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(25),
  },
  vibesText: {
    color: MineShaft,
    fontSize: 16,
  },
});
