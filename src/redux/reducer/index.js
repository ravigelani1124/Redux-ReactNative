import {combineReducers} from 'redux';
import {userDetailsReducer} from './userDetails';

const rootReducer = combineReducers({
  userDetailsReducer: userDetailsReducer,
});
export default rootReducer;
