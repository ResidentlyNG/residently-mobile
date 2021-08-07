import { CANCEL_REQUEST } from '../actions/types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_REQUEST:
      return {
        ...state,
      };
    default:
      return initialState;
  }
};
