import {
  FETCH_ITEMS,
  FILTER_NAMES,
  REQUEST_ITEM,
  REQUEST_ITEMS,
  REQUEST_PAGE,
  SET_CURRENT_ITEM,
  SET_MAX_PAGES,
} from './types';

export const requestItems = (path, numberPage) => {
  return {
    type: REQUEST_ITEMS,
    path,
    numberPage,
  };
};

export const requestItem = (path, numberPage) => {
  return {
    type: REQUEST_ITEM,
    path,
    numberPage,
  };
};

export const requestPage = (path, numberPage) => {
  return {
    type: REQUEST_PAGE,
    path,
    numberPage,
  };
};

export const fetchItems = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};

const doNameWord = (string) => {
  let newS = string
    .split(/\s+/)
    .map((word) => {
      let newWord = word
        .split(/-/)
        .map((w) => {
          if (w !== '') {
            return w[0].toUpperCase() + w.substring(1);
          } else {
            return null;
          }
        })
        .join('-');
      if (word !== '') {
        return newWord[0].toUpperCase() + newWord.substring(1);
      } else {
        return null;
      }
    })
    .join(' ');

  return newS.trim();
};

export const setFilteredNames = (array, value) => {
  let filterArray = array.filter((obj) => {
    return obj.name.startsWith(`${doNameWord(value)}`);
  });
  if (value === '') {
    filterArray = [];
  }
  return {
    type: FILTER_NAMES,
    payload: filterArray,
  };
};

export const setCurrentItem = (payload) => {
  return {
    type: SET_CURRENT_ITEM,
    payload,
  };
};

export const setMaxPages = (payload) => {
  return {
    type: SET_MAX_PAGES,
    payload,
  };
};
