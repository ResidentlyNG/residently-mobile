import {
  CANCEL_REQUEST,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_ERROR,
} from '../actions/types';

const initialState = {
  profile: {},
  home: {},
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_HOME:
      return {
        ...state,
        loading: true,
      };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          home_id: action.payload.id,
        },
        home: action.payload,
      };
    case GET_HOME_ERROR:
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
