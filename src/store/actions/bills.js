import api from '../../utils/api';
import { GET_BILLS, GET_BILLS_ERROR, GET_BILLS_SUCCESS } from './types';

export const getBills = () => (dispatch) => {
  dispatch({ type: GET_BILLS });
  api('/bills', 'GET')
    .then((response) => {
      dispatch({
        type: GET_BILLS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_BILLS_ERROR,
        payload: error?.data,
      });
    });
};
