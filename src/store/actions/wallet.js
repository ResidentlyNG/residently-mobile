import api from '../../utils/api';
import {
  GET_BANKS,
  GET_BANKS_ERROR,
  GET_BANKS_SUCCESS,
  GET_CARD,
  GET_CARD_ERROR,
  GET_CARD_SUCCESS,
} from './types';

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

export const getCard = () => (dispatch) => {
  dispatch({ type: GET_CARD });
  api('/card')
    .then((response) => {
      dispatch({
        type: GET_CARD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_CARD_ERROR,
        payload: error.message,
      }),
    );
};
