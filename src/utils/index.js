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
