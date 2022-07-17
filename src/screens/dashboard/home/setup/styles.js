import { StyleSheet } from 'react-native';
import * as Colors from '../../../../components/Colors';
import { circle, hp, wp } from '../../../../components/utils';

export const userInfoStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: Colors.White,
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
    marginTop: hp(42.9),
    lineHeight: 37,
    textAlign: 'center',
    width: wp(313),
    color: Colors.MineShaft,
  },
  userCard: {
    width: wp(338),
    height: hp(459),
    borderRadius: 14,
    // marginTop: hp(80),
    // elevation: 6,
    alignItems: 'center',
    backgroundColor: Colors.White,
    shadowOffset: { width: 0, height: 24 },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    elevation: 6,
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
    borderColor: Colors.ScienceBlue,
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
    backgroundColor: Colors.ScienceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: Colors.Scorpion,
    width: wp(164),
  },
  detail: {
    fontSize: 14,
    width: wp(149),
    fontWeight: 'bold',
  },
  noteLead: {
    marginTop: hp(33),
    alignSelf: 'center',
    color: Colors.Midnight,
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

export const hostStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },

  mainCard: {
    marginTop: hp(35),
    width: wp(331),
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    backgroundColor: Colors.White,
    elevation: 5,
  },
  outerCircle: circle(50, 'rgba(0, 201, 149, 0.1)', {
    marginTop: hp(57),
    marginLeft: wp(22),
    alignSelf: 'flex-start',
  }),
  innerCircle: circle(44.3, Colors.Green),
  one: {
    color: Colors.White,
    fontSize: 20,
  },
  leadText: {
    color: Colors.WoodSmoke,
    fontSize: 20,
    marginTop: hp(10),
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  subText: {
    width: wp(274),
    fontSize: 14,
    lineHeight: 18,
    marginTop: hp(10),
  },
  input: {
    width: wp(287),
    marginTop: hp(27),
  },
  button: {
    width: wp(287),
    marginTop: hp(20),
  },
});

export const success = StyleSheet.create({
  ...hostStyles,
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.Green,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  header: {
    color: Colors.White,
  },

  thumbView: circle(86, Colors.WhiteLilac, { marginTop: hp(61) }),
  thumb: {
    width: wp(52),
    height: hp(48),
  },

  mainCard: {
    backgroundColor: Colors.White,
    marginTop: hp(70),
    width: wp(343),
    height: hp(503),
    borderRadius: 20,
    alignItems: 'center',
  },
  leadText: {
    color: Colors.WoodSmoke,
    fontSize: 20,
    marginTop: hp(10),
  },
  homeText: {
    width: wp(274),
    fontSize: 20,
    textAlign: 'center',
    color: Colors.WoodSmoke,
    fontFamily: 'Inter-Bold',
  },
  subText: {
    width: wp(274),
    fontSize: 14,
    textAlign: 'center',
    color: Colors.WoodSmoke,
    marginTop: hp(27),
  },
  home: {
    fontSize: 20,
    color: Colors.Green,
    fontFamily: 'Inter-Bold',
  },
  button: {
    width: wp(287),
    marginTop: hp(47),
  },
});

export const roommateStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  mainCard: {
    backgroundColor: Colors.White,
    flex: 1,
    marginTop: hp(70),
    width: wp(343),
    height: hp(503),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    elevation: 4,
  },
  profileGroup: {
    width: wp(141.5),
    height: hp(63),
    marginTop: hp(114.6),
  },
  leadText: {
    color: Colors.WoodSmoke,
    fontSize: 20,
    marginTop: hp(10),
  },
  subText: {
    width: wp(274),
    fontSize: 14,
    textAlign: 'center',
    color: Colors.WoodSmoke,
    marginTop: hp(27),
  },
  button: {
    width: wp(287),
    marginTop: hp(38),
  },
});

export const joinRoom = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: Colors.Green,
  },
  headerTitle: {
    color: Colors.White,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  mainView: {
    marginTop: hp(71),
    width: wp(343),
    height: hp(503),
    borderRadius: 20,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },

  leadText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: Colors.WoodSmoke,
    width: wp(231),
    marginTop: hp(65),
    marginLeft: wp(28),
  },
  subText: {
    width: wp(274),
    lineHeight: 18,
    marginTop: hp(27),
    alignSelf: 'flex-start',
    marginLeft: wp(28),
  },
  input: {
    width: wp(287),
    height: hp(64),
    borderWidth: 1,
    borderColor: Colors.AthensGray,
    // backgroundColor: '#F5F5F5', // White,
    paddingLeft: wp(15),
    marginTop: hp(21),
  },
  button: {
    marginTop: hp(20),
    width: wp(287),
    // height: hp(48),
    // borderRadius: 6,
    alignSelf: 'center',
  },
  resendText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 15,
  },
  resend: {
    color: Colors.Green,
    textDecorationLine: 'underline',
  },
});

export const invite = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    color: Colors.WoodSmoke,
    fontSize: 17,
    marginLeft: 25,
    marginRight: 25,
  },
  scrollView: {
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  input: {
    marginTop: 39,
  },
  buttonView: {
    marginTop: 28,
    paddingVertical: 5,
  },
  addButton: {
    color: Colors.Green,
  },
  button: {
    marginTop: hp(100),
  },

  error: {
    color: Colors.BrickRed,
  },
  errorInput: {
    borderColor: Colors.BrickRed,
  },
});
