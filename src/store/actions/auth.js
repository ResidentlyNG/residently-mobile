import showToast from '../../components/Toast';
import api from '../../utils/api';
import {
  GET_PROFILE_SUCCESS,
  GET_WALLET_SUCCESS,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './types';

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN });
  api('/login', 'POST', data)
    .then((res) => {
      const auth = { token: res.token.token, email: res.data.email };
      dispatch({ type: LOGIN_SUCCESS, payload: auth });
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
      dispatch({ type: GET_WALLET_SUCCESS, payload: res.wallet });
      console.log(res);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_ERROR, payload: error });

      showToast(error.message, 'error');
    });
};
