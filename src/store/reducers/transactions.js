import {
  FETCH_MORE_TRANSACTIONS,
  FETCH_MORE_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESS,
  LOGOUT,
  REFRESH_TRANSACTIONS,
} from '../actions/types';

const initialState = {
  transactions: [],
  meta: {},
  loading: false,
  refreshing: false,
  fetchingMore: false,
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
        transactions: action.payload.data,
        meta: action.payload.meta,
      };
    case REFRESH_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        refreshing: true,
      };
    case GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_MORE_TRANSACTIONS:
      return {
        ...state,
        fetchingMore: true,
      };
    case FETCH_MORE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        fetchingMore: false,
        transactions: [...state.transactions, ...action.payload.data],
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
