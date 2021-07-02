import { call, put, takeEvery } from 'redux-saga/effects';
import { showError } from '../actions/errorAction';
import { hideLoader, showLoader } from '../actions/loaderAction';
import { REQUEST_ITEM, REQUEST_ITEMS, REQUEST_PAGE } from '../actions/types';
import axios from '../axios/axios-api-rick-and-morty';
import { fetchItems, setCurrentItem, setMaxPages } from '../actions/wikiAction';

const fetchItem = async (path, numberPage) => {
  if (numberPage !== undefined) {
    return await axios.get(`${path}/?page=${numberPage}`);
  } else {
    return await axios.get(`${path}`);
  }
};

function* sagaItemsWorker(action) {
  const allItems = [];
  try {
    yield put(showLoader());

    const payload = yield call(fetchItem, action.path);
    yield put(setMaxPages(payload.data.info.pages));
    for (let i = 1; i <= payload.data.info.pages; i++) {
      const payloadItems = yield call(fetchItem, action.path, i);

      allItems.push(...payloadItems.data.results);
    }
    yield put(fetchItems(allItems));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}
export function* sagaItemsWatcher() {
  yield takeEvery(REQUEST_ITEMS, sagaItemsWorker);
}

function* sagaPagesWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchItem, action.path, action.numberPage);
    yield put(setMaxPages(payload.data.info.pages));
    yield put(fetchItems(payload.data.results));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}
export function* sagaPagesWatcher() {
  yield takeEvery(REQUEST_PAGE, sagaPagesWorker);
}

function* sagaItemWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchItem, action.path);
    yield put(setCurrentItem(payload.data));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}
export function* sagaItemWatcher() {
  yield takeEvery(REQUEST_ITEM, sagaItemWorker);
}
