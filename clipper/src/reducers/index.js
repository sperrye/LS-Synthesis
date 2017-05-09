import { combineReducers } from 'redux';
import ClipsReducer from './ClipsReducer';
import GetAddReducer from './GetAddReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  activeClip: ClipsReducer,
  clips: GetAddReducer,
  form: FormReducer,
});

export default rootReducer;
