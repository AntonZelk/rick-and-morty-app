import { call, put, takeEvery } from 'redux-saga/effects';
import { showError } from '../actions/errorAction';
import { fetchQuotes, getCurrentPerson } from '../actions/quotesAction';
import { hideLoader, showLoader } from '../actions/loaderAction';
import { REQUEST_QUOTES } from '../actions/types';
import axios from '../axios/axios-db';

const fetchQuotesDB = async () => {
  return await axios.get('/quotes.json');
};

function* sagaQuotesWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchQuotesDB);
    yield put(fetchQuotes(payload.data));
    yield put(getCurrentPerson(payload.data.rick));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}

export function* sagaQuotesWatcher() {
  yield takeEvery(REQUEST_QUOTES, sagaQuotesWorker);
}
