import { Actions } from 'react-native-router-flux';
import showToast from '../../components/Toast';
import api from '../../utils/api';
import {
  GET_PROFILE_SUCCESS,
  GET_WALLET_SUCCESS,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './types';
import { getBanks } from './wallet';

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN });
  api('/login', 'POST', data)
    .then((res) => {
      const auth = { token: res.token.token, email: res.data.email };
      const profile = res.data;
      dispatch({ type: LOGIN_SUCCESS, payload: auth });
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
      dispatch({ type: GET_WALLET_SUCCESS, payload: res.wallet });
      dispatch(getBanks());
      if (profile.email_verified !== 'false') {
        if (profile.home_id) Actions.dashboard({ type: 'reset' });
        else Actions.intro({ type: 'reset' });
      } else Actions.join_room({ verification: true });
      console.log(res);
    })
    .catch((error) => {
      console.log('errt', error);
      dispatch({ type: LOGIN_ERROR, payload: error });

      showToast(error?.message || 'Something went wrong', 'error');
    });
};
