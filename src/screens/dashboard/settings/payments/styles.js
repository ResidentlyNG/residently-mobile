import { StyleSheet } from 'react-native';
import { PersianGreen, White, WoodSmoke } from '../../../../components';
import { hp, wp } from '../../../../components/utils';

export const cardStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: '100%', // hdp(758),
    width: '100%', // wdp(375),
    backgroundColor: White,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },

  mainView: {
    width: wp(310),
    height: hp(488),
    backgroundColor: White,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 2,
    marginTop: hp(23),
  },
  headerText: {
    fontSize: 20,
    color: WoodSmoke,
    marginTop: hp(34),
    alignSelf: 'flex-start',
    marginLeft: wp(22),
  },
  cardBackground: {
    // alignItems: 'center',
    height: hp(100),
    width: wp(267),
    backgroundColor: PersianGreen,
    borderRadius: 20,
    marginTop: hp(29),
    paddingLeft: 31,
  },
  cardImageBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  pan: {
    color: White,
    fontSize: 16,
    marginTop: hp(27),
  },
  cardItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(205),
    justifyContent: 'space-between',
    marginTop: hp(10),
  },
  detail: {
    fontSize: 14,
    color: White,
  },
  mastercard: {
    width: wp(29.1),
    height: hp(18),
  },
});
