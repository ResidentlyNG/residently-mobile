import { StyleSheet } from 'react-native';
import * as Colors from '../../../../components/Colors';
import { hp, wp } from '../../../../components/utils';

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
