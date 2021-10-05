import api from '../../utils/api';
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
} from './types';

export const getTransactions = () => (dispatch) => {
  dispatch({ type: GET_TRANSACTIONS });
  api('/transactions', 'GET')
    .then((response) => {
      dispatch({
        type: GET_TRANSACTIONS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_TRANSACTIONS_ERROR,
        payload: error?.data,
      });
    });
};
