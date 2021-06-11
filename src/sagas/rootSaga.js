import { all } from 'redux-saga/effects';
import { sagaQuotesWatcher } from './quotesSaga';
import { sagaItemsWatcher } from './wikiSaga';
import { sagaMaxPagesWatcher } from './wikiSaga';

export function* rootSaga() {
  yield all([sagaQuotesWatcher(), sagaItemsWatcher(), sagaMaxPagesWatcher()]);
}
