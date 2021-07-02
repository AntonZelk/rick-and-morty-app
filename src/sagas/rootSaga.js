import { all } from 'redux-saga/effects';
import { sagaQuotesWatcher } from './quotesSaga';
import { sagaItemsWatcher, sagaItemWatcher } from './wikiSaga';
import { sagaPagesWatcher } from './wikiSaga';

export function* rootSaga() {
  yield all([
    sagaQuotesWatcher(),
    sagaItemsWatcher(),
    sagaItemWatcher(),
    sagaPagesWatcher(),
  ]);
}
