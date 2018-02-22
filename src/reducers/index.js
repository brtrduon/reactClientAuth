import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// reminder: the format above takes what's being imported (in this case, 'reducer'), and redeclares the variable (in this case, as 'form')

const rootReducer = combineReducers({
  form
});

export default rootReducer;
