import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
  LOGOUT,
} from '../actions/types';

const initialState = {
  transactions: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
