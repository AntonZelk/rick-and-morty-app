import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  FETCH_ITEMS,
  FILTER_NAMES,
  SET_CURRENT_ITEM,
  SET_MAX_PAGES,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isError: false,
  currentPage: 1,
  maxPages: null,
  fetchedItems: [],
  filteredItems: [],
  currentItem: {},
};

export const wikiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case FETCH_ITEMS:
      return { ...state, fetchedItems: action.payload };
    case FILTER_NAMES:
      return { ...state, filteredItems: action.payload };
    case SET_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    case SET_MAX_PAGES:
      return { ...state, maxPages: action.payload };
    default:
      return state;
  }
};
