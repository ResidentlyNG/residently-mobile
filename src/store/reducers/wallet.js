import {
  CANCEL_REQUEST,
  GET_WALLET,
  GET_WALLET_SUCCESS,
  GET_WALLET_ERROR,
  GET_BANKS,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
} from '../actions/types';

const initialState = {
  wallet: {},
  banks: [],
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

    case CANCEL_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
