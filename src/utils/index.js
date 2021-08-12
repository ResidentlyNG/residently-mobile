import { store } from '../store';
import { RESET_LOADER } from '../store/actions/types';
import api from './api';

// TODO:: Abstract utility
const http = (route, method, data) => {
  const result = api(route, method, data)
    .then((res) => res)
    .catch((err) => err);
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
