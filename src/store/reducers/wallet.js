import {
  CANCEL_REQUEST,
  GET_WALLET,
  GET_WALLET_SUCCESS,
  GET_WALLET_ERROR,
  GET_BANKS,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
  GET_CARD,
  GET_CARD_SUCCESS,
  GET_CARD_ERROR,
  LOGOUT,
} from '../actions/types';

const initialState = {
  wallet: {},
  banks: [],
  card: {},
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLET:
      return {
        ...state,
        loading: true,
      };
    case GET_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
        wallet: action.payload,
      };
    case GET_WALLET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_BANKS:
      return {
        ...state,
        loading: true,
      };
    case GET_BANKS_SUCCESS:
      return {
        ...state,
        loading: false,
        banks: action.payload,
      };
    case GET_BANKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_CARD:
      return {
        ...state,
        loading: true,
      };
    case GET_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        card: action.payload,
      };
    case GET_CARD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    case CANCEL_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
