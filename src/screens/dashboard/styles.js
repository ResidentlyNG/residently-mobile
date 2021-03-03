import { Platform, StyleSheet } from 'react-native';
import { heightPercentageToDP as hdp } from 'react-native-responsive-screen';
import { Alto, White } from '../../components';
import { hp, wp } from '../../components/utils';

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
    position: 'absolute',
    bottom: 0,
    zIndex: 80,
  },
  footerTab: {
    backgroundColor: White,
    alignItems: 'center',
    borderColor: 'rgba(155, 132, 135, 0.142097)',
    paddingLeft: wp(30),
    paddingRight: wp(30),
    borderTopWidth: 2,
    // paddingBottom: Platform.OS === 'ios' && isIPhoneX() ? hp(18) : null,
  },
  homeButtons: {
    padding: 15,
  },
  activeButton: {
    // height: hp(44),
    // width: wp(115),
    alignItems: 'center',
  },
  menuTitle: {
    color: Alto,
    marginTop: hp(6),
  },
});
