import { REQUEST_QUOTES, FETCH_QUOTES, CURRENT_PERSON } from './types';

export const requestQuotes = () => {
  return {
    type: REQUEST_QUOTES,
  };
};

export const fetchQuotes = (payload) => {
  return {
    type: FETCH_QUOTES,
    payload,
  };
};

export const getCurrentPerson = (payload) => {
  return {
    type: CURRENT_PERSON,
    payload,
  };
};

export const getNextPerson = (obj, id) => {
  let nextObj = {};
  id++;
  const arr = Object.keys(obj);

  if (id === arr.length) {
    id = 0;
  }

  arr.forEach((person) => {
    if (id === obj[person].id) {
      nextObj = obj[person];
    }
  });
  return {
    type: CURRENT_PERSON,
    payload: nextObj,
  };
};

export const getPrevPerson = (obj, id) => {
  let nextObj = {};
  id--;
  const arr = Object.keys(obj);

  if (id === -1) {
    id = arr.length - 1;
  }

  arr.forEach((person) => {
    if (id === obj[person].id) {
      nextObj = obj[person];
    }
  });
  return {
    type: CURRENT_PERSON,
    payload: nextObj,
  };
};
