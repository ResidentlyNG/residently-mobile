import {
  CANCEL_REQUEST,
  GET_WALLET,
  GET_WALLET_SUCCESS,
  GET_WALLET_ERROR,
} from '../actions/types';

const initialState = {
  wallet: {},
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

    case CANCEL_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
