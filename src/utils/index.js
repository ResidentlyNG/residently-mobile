import api from './api';

// TODO:: Abstract utility

export const createAccount = (data) => {
  const result = api('/register', 'POST', data)
    .then((res) => res)
    .catch((err) => err);
  return result;
};

export const verifyEmail = (data) => {
  const result = api('/mail/verify', 'POST', data)
    .then((res) => res)
    .catch((err) => err);
  return result;
};
