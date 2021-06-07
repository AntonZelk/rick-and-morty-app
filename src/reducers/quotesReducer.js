import {
  FETCH_QUOTES,
  HIDE_ERROR,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  CURRENT_PERSON,
} from '../actions/types';

const initialState = {
  fetchedQuotes: [],
  isLoading: false,
  isError: false,
  currentPerson: {},
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case HIDE_ERROR:
      return { ...state, isError: false };
    case FETCH_QUOTES:
      return { ...state, fetchedQuotes: action.payload };
    case CURRENT_PERSON:
      return { ...state, currentPerson: action.payload };
    default:
      return state;
  }
};
