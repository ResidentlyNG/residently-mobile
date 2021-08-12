import {
  CANCEL_REQUEST,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_LOADER,
} from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
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
        isAuthenticated: true,
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
    case RESET_LOADER:
      return {
        ...state,
        loading: false,
        message: '',
        error: '',
      };
    default:
      return state;
  }
};
