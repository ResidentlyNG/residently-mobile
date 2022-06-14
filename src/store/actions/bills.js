import api from '../../utils/api';
import { GET_BILLS, GET_BILLS_ERROR, GET_BILLS_SUCCESS } from './types';

export const getBills = () => (dispatch) => {
  dispatch({ type: GET_BILLS });
  api('/home/bills', 'GET')
    .then((response) => {
      console.log('bls', response);
      dispatch({
        type: GET_BILLS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('er', error);
      dispatch({
        type: GET_BILLS_ERROR,
        payload: error?.data,
      });
    });
};
