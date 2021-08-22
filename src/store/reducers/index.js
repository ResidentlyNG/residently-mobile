import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import wallet from './wallet';

export default combineReducers({
  auth,
  profile,
  wallet,
});
