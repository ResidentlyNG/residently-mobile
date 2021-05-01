import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';
// import accounting from 'accounting';
// import { store } from '../store';

const CustomHeight = 800; // 740;
const CustomWidth = 375;

export const hp = (value) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

export const validatePhone = (number) => {
  if (number.length !== 11) return false;
  if (
    !number.startsWith('07') ||
    !number.startsWith('08') ||
    !number.startsWith('09')
  )
    return false;
  return true;
};

const emailValidator = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateEmail = (email) => {
  if (emailValidator(email)) {
    return true;
  }
  return false;
};

export const circle = (size, color, props) => ({
  width: wp(size),
  height: wp(size),
  borderRadius: wp(size) / 2,
  backgroundColor: color || 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
  ...props,
});
