import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import wallet from './wallet';
import bills from './bills';
import transactions from './transactions';

export default combineReducers({
  auth,
  profile,
  wallet,
  bills,
  transactions,
});
