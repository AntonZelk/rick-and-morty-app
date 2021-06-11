import { call, put, takeEvery } from 'redux-saga/effects';
import { showError } from '../actions/errorAction';
import { hideLoader, showLoader } from '../actions/loaderAction';
import { REQUEST_ITEMS, REQUEST_ALL_ITEMS } from '../actions/types';
import axios from '../axios/axios-api-rick-and-morty';
import {
  fetchItems,
  getArrayProperty,
  requestCharactersNames,
  setCharactersMaxPage,
  setEpisodesMaxPage,
  setLocationsMaxPage,
} from '../actions/wikiAction';

// const fetchCharacters = async () => {
//   return await axios.get('/character');
// };

// const fetchEpisodes = async () => {
//   return await axios.get('/episode');
// };

// const fetchLocations = async () => {
//   return await axios.get('/location');
// };

// function* sagaRequestAllWorker() {
//   const charactersName = [];
//   const episodesNumber = [];
//   const locationNames = [];
//   try {
//     yield put(showLoader());
//     const payloadCharacters = yield call(fetchCharacters);
//     yield put(setCharactersMaxPage(payloadCharacters.data.info.pages));
//     const payloadEpisodes = yield call(fetchEpisodes);
//     yield put(setEpisodesMaxPage(payloadEpisodes.data.info.pages));
//     const payloadLocations = yield call(fetchLocations);
//     yield put(setLocationsMaxPage(payloadLocations.data.info.pages));
//     yield put(hideLoader());
//   } catch (e) {
//     yield put(showError());
//     yield put(hideLoader());
//   }
// }

// const fetchItem = async (path) => {
//   return await axios.get(`${path}`);
// };

// function* sagaItemsWorker(action) {
//   try {
//     yield put(showLoader());
//     const payload = yield call(fetchItem, action.payload);
//     yield put(fetchItems(payload.data.results));
//     yield put(hideLoader());
//   } catch (e) {
//     yield put(showError());
//     yield put(hideLoader());
//   }
// }

// export function* sagaItemsWatcher() {
//   yield takeEvery(REQUEST_ITEMS, sagaItemsWorker);
// }

// export function* sagaMaxPagesWatcher() {
//   yield takeEvery(REQUEST_ALL_ITEMS, sagaRequestAllWorker);
// }
const fetchCharacters = async (numberPage) => {
  return await axios.get(`/character?page=${numberPage.payload}`);
};

const fetchEpisodes = async () => {
  return await axios.get('/episode');
};

const fetchLocations = async () => {
  return await axios.get('/location');
};

function* sagaRequestAllWorker() {
  const namesCharacters = [];
  const episodesNumber = [];
  const locationNames = [];
  try {
    yield put(showLoader());
    const payloadCharactersMaxPages = yield call(
      fetchCharacters,
      requestCharactersNames(1)
    );

    for (let i = 1; i <= payloadCharactersMaxPages.data.info.pages; i++) {
      const payloadCharacters = yield call(
        fetchCharacters,
        requestCharactersNames(i)
      );
      const test = getArrayProperty(payloadCharacters.data.results, 'name');
      namesCharacters.push(...test.payload);
    }
    console.log(namesCharacters);
    // const payloadCharacters = yield call(
    //   fetchCharacters,
    //   requestCharactersNames(3)
    // );

    // yield put(setCharactersMaxPage(payloadCharacters.data.info.pages));
    // const payloadEpisodes = yield call(fetchEpisodes);
    // yield put(setEpisodesMaxPage(payloadEpisodes.data.info.pages));
    // const payloadLocations = yield call(fetchLocations);
    // yield put(setLocationsMaxPage(payloadLocations.data.info.pages));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}

const fetchItem = async (path) => {
  return await axios.get(`${path}`);
};

function* sagaItemsWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchItem, action.payload);
    yield put(fetchItems(payload.data.results));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}

export function* sagaItemsWatcher() {
  yield takeEvery(REQUEST_ITEMS, sagaItemsWorker);
}

export function* sagaMaxPagesWatcher() {
  yield takeEvery(REQUEST_ALL_ITEMS, sagaRequestAllWorker);
}
