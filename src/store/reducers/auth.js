import {
  CANCEL_REQUEST,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Login successful',
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    case CANCEL_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
