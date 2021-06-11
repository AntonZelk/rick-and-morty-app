import { combineReducers } from 'redux';
import { quotesReducer } from './quotesReducer';
import { startReducer } from './startReducer';
import { wikiReducer } from './wikiReducer';

export const rootReducer = combineReducers({
  quote: quotesReducer,
  start: startReducer,
  wiki: wikiReducer,
});
