import {
  GET_BILLS,
  GET_BILLS_ERROR,
  GET_BILLS_SUCCESS,
} from '../actions/types';

const initialState = {
  bills: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
        loading: true,
      };
    case GET_BILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        bills: action.payload || [],
      };
    case GET_BILLS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
