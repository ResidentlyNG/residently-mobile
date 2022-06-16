import api from '../../utils/api';
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
  REFRESH_TRANSACTIONS,
} from './types';

export const getTransactions = (refresh, page, status) => (dispatch) => {
  dispatch({ type: refresh ? REFRESH_TRANSACTIONS : GET_TRANSACTIONS });
  api(`/transactions?page=${page || ''}&status=${status || ''}`, 'GET')
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
