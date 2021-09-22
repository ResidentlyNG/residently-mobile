import { store } from '../store';
import { RESET_LOADER } from '../store/actions/types';
import api from './api';

// TODO:: Abstract utility
const http = async (route, method, data) => {
  const result = await api(route, method, data);
  // .then((res) => res)
  // .catch((err) => err);
  return result;
};

export const createAccount = (data) => http('/register', 'POST', data);
export const verifyEmail = (data) => http('/mail/verify', 'POST', data);
export const resendEmailOtp = (data) =>
  http('/mail/verify/resend', 'POST', data);

export const checkAuth = async () => {
  store.dispatch({ type: RESET_LOADER });
  const isAuth = await store.getState().auth.isAuthenticated;

  return isAuth;
};

export const createHome = (data) => http('/home/create', 'POST', data);
export const addCard = (data) => http('/card/add', 'POST', data);
export const verifyTransaction = (reference) =>
  http(`/transaction/verify/${reference}`);
export const validateAccount = (data) => http('/bank/validate', 'POST', data);
export const createBill = (data) => http('/bill/create', 'POST', data);
