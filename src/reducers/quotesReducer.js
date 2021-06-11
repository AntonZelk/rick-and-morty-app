import {
  FETCH_QUOTES,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  CURRENT_PERSON,
  SET_TIMER,
  ADD_ACTIVE_CLASSES,
  ADD_ANIMATE_CLASSES,
  REMOVE_ACTIVE_CLASSES,
} from '../actions/types';

const initialState = {
  fetchedQuotes: [],
  isLoading: false,
  isError: false,
  currentPerson: {},
  counter: 0,
  animateClasses: {},
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case ADD_ANIMATE_CLASSES:
      return { ...state, animateClasses: action.payload };
    case ADD_ACTIVE_CLASSES:
      return { ...state, animateClasses: action.payload };

    case REMOVE_ACTIVE_CLASSES:
      return { ...state, animateClasses: action.payload };
    case SET_TIMER:
      return { ...state, counter: action.payload };
    case FETCH_QUOTES:
      return { ...state, fetchedQuotes: action.payload };
    case CURRENT_PERSON:
      return { ...state, currentPerson: action.payload };
    default:
      return state;
  }
};
