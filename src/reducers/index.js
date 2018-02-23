import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// reminder: the format above takes what's being imported (in this case, 'reducer'), and redeclares the variable (in this case, as 'form')
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
