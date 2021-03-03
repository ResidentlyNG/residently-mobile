import { StyleSheet } from 'react-native';
import { Green, White } from '../../../components';
import { hp, wp } from '../../../components/utils';

export const home = StyleSheet.create({
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
    marginTop: hp(26),
    width: wp(323),
    justifyContent: 'space-between',
  },
  userImage: {
    width: wp(46),
    height: wp(46),
    borderRadius: wp(46) / 2,
  },
  menuView: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(40) / 2,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    alignSelf: 'flex-start',
    color: '#F5F5F5',
    marginTop: hp(21),
    marginLeft: wp(22),
  },
  username: {
    fontSize: 25,
    alignSelf: 'flex-start',
    color: White,
    marginLeft: wp(32),
  },
});
