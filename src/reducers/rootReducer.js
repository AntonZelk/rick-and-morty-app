import { combineReducers } from 'redux';
import { quotesReducer } from './quotesReducer';
import { startReducer } from './startReducer';

export const rootReducer = combineReducers({
  quote: quotesReducer,
  start: startReducer,
});
