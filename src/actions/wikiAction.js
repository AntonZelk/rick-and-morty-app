import {
  REQUEST_ITEMS,
  FETCH_ITEMS,
  SET_CURRENT_PAGE,
  REQUEST_ALL_ITEMS,
  SET_CHARACTERS_MAX_PAGE,
  SET_EPISODES_MAX_PAGE,
  SET_LOCATIONS_MAX_PAGE,
  FETCH_NAMES_CHARACTERS,
  FETCH_NAMES_LOCATIONS,
  FETCH_NAMES_EPISODES,
  REQUEST_CHARACTERS_NAMES,
  GET_ARRAY_PROPERTY,
} from './types';

export const requestItems = (path) => {
  return {
    type: REQUEST_ITEMS,
    payload: path,
  };
};
export const requestAllItems = () => {
  return {
    type: REQUEST_ALL_ITEMS,
  };
};

export const fetchItems = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};
export const fetchNamesCharacters = (payload) => {
  return {
    type: FETCH_NAMES_CHARACTERS,
    payload,
  };
};

export const requestCharactersNames = (payload) => {
  return {
    type: REQUEST_CHARACTERS_NAMES,
    payload,
  };
};
export const fetchNamesLocations = (payload) => {
  return {
    type: FETCH_NAMES_LOCATIONS,
    payload,
  };
};
export const fetchNamesEpisodes = (payload) => {
  return {
    type: FETCH_NAMES_EPISODES,
    payload,
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setCharactersMaxPage = (payload) => {
  return {
    type: SET_CHARACTERS_MAX_PAGE,
    payload,
  };
};
export const setEpisodesMaxPage = (payload) => {
  return {
    type: SET_EPISODES_MAX_PAGE,
    payload,
  };
};
export const setLocationsMaxPage = (payload) => {
  return {
    type: SET_LOCATIONS_MAX_PAGE,
    payload,
  };
};

export const getNextPage = (payload) => {
  payload++;
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};
export const getPreviosPage = (payload) => {
  payload--;
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const getArrayProperty = (array, property) => {
  const arrayProperty = [];
  array.forEach((obj) => {
    arrayProperty.push(obj[property]);
  });

  return {
    type: GET_ARRAY_PROPERTY,
    payload: arrayProperty,
  };
};
