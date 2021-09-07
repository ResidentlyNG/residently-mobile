import api from '../../utils/api';
import { GET_BANKS, GET_BANKS_ERROR, GET_BANKS_SUCCESS } from './types';

export const getBanks = () => (dispatch) => {
  dispatch({ type: GET_BANKS });
  api('/banks')
    .then((response) => {
      dispatch({
        type: GET_BANKS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_BANKS_ERROR,
        payload: error.message,
      }),
    );
};
