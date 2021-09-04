import api from '../../utils/api';
import { GET_HOME, GET_HOME_ERROR, GET_HOME_SUCCESS } from './types';

export const getHome = () => (dispatch) => {
  dispatch({ type: GET_HOME });
  api('/home', 'GET')
    .then((response) => {
      dispatch({ type: GET_HOME_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_HOME_ERROR, payload: error });
    });
};
