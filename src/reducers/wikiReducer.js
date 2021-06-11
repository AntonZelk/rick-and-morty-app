import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  FETCH_ITEMS,
  SET_CURRENT_PAGE,
  SET_CHARACTERS_MAX_PAGE,
  SET_EPISODES_MAX_PAGE,
  SET_LOCATIONS_MAX_PAGE,
  FETCH_NAMES,
  FETCH_NAMES_CHARACTERS,
  FETCH_NAMES_LOCATIONS,
  FETCH_NAMES_EPISODES,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isError: false,
  currentPage: 1,
  fetchedItems: [],
  fetchedNamesCharcaters: [],
  fetchedNamesLocations: [],
  fetchedNamesEpisodes: [],
  maxCharactersPage: '',
  maxEpisodesPage: '',
  maxLocationsPage: '',
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
    case FETCH_NAMES_CHARACTERS:
      return { ...state, fetchedNamesCharcaters: action.payload };
    case FETCH_NAMES_LOCATIONS:
      return { ...state, fetchedNamesLocations: action.payload };
    case FETCH_NAMES_EPISODES:
      return { ...state, fetchedNamesEpisodes: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_CHARACTERS_MAX_PAGE:
      return { ...state, maxCharactersPage: action.payload };
    case SET_EPISODES_MAX_PAGE:
      return { ...state, maxEpisodesPage: action.payload };
    case SET_LOCATIONS_MAX_PAGE:
      return { ...state, maxLocationsPage: action.payload };
    default:
      return state;
  }
};
