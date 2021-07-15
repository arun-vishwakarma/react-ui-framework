/**
 * Containing all app reducers
 */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //Actual localstoage

import signInReducer from './sign-in/reducer';
import authReducer from './sign-in/reducer/auth.reducer';

const persistConfig = {
  key:'root',
  storage,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  user: signInReducer,
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
