import { StyleSheet } from 'react-native';
import { Green, MineShaft, Roman, White } from '../../components';
import { hp, wp } from '../../components/utils';

export const getStartedStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: Green,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(40),
    // width: wp(311),
  },
  mainView: {
    marginTop: hp(35),
  },
  header: {
    fontSize: 22,
    color: White,
    marginLeft: wp(5),
  },
  rocket: {
    width: wp(134),
    height: hp(134),
    marginTop: hp(73),
  },
  welcome: {
    fontSize: 30,
    color: MineShaft,
    width: wp(175),
    marginTop: hp(26),
    textAlign: 'center',
    lineHeight: 37,
  },
  subText: {
    width: wp(216),
    fontSize: 12,
    textAlign: 'center',
    marginTop: hp(21),
    lineHeight: 18,
  },
  button: {
    marginTop: hp(21),
  },
  declineButton: {
    backgroundColor: Roman,
    marginTop: hp(20),
  },
});
