import {createStore, combineReducers} from 'redux';
import userReducer from './Reducers/userReducer';

const rootReducers = combineReducers({
  userReducer,
});
export const store = createStore(rootReducers);
