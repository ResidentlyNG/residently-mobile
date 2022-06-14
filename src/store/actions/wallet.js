import api from '../../utils/api';
import {
  GET_BANKS,
  GET_BANKS_ERROR,
  GET_BANKS_SUCCESS,
  GET_CARD,
  GET_CARD_ERROR,
  GET_CARD_SUCCESS,
  GET_WALLET,
  GET_WALLET_ERROR,
  GET_WALLET_SUCCESS,
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

export const getWallet = () => (dispatch) => {
  dispatch({ type: GET_WALLET });
  api('/wallet')
    .then((response) => {
      dispatch({
        type: GET_WALLET_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_WALLET_ERROR,
        payload: error.message,
      }),
    );
};
