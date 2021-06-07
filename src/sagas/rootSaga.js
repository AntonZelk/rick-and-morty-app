import { all } from 'redux-saga/effects';
import { sagaQuotesWatcher } from './quotesSaga';

export function* rootSaga() {
  yield all([sagaQuotesWatcher()]);
}
