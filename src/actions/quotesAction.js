import {
  REQUEST_QUOTES,
  FETCH_QUOTES,
  CURRENT_PERSON,
  SET_TIMER,
  ADD_ACTIVE_CLASSES,
  ADD_ANIMATE_CLASSES,
  REMOVE_ACTIVE_CLASSES,
} from './types';

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

export const onTimer = (payload) => {
  return {
    type: SET_TIMER,
    payload: payload + 1,
  };
};

export const clearTimer = () => {
  return {
    type: SET_TIMER,
    payload: 0,
  };
};

export const addAnimateClasses = (obj) => {
  return {
    type: ADD_ANIMATE_CLASSES,
    payload: obj,
  };
};

export const addActiveClasses = (animateClasses, activeClass) => {
  Object.keys(animateClasses).forEach((arrCls) => {
    animateClasses[arrCls].push(activeClass);
  });

  return {
    type: ADD_ACTIVE_CLASSES,
    payload: animateClasses,
  };
};

export const removeActiveClasses = (animateClasses, activeClass) => {
  Object.keys(animateClasses).forEach((arrCls) => {
    animateClasses[arrCls].forEach((cls, index) => {
      if (cls === activeClass) {
        animateClasses[arrCls].splice(index);
      }
    });
  });

  return {
    type: REMOVE_ACTIVE_CLASSES,
    payload: animateClasses,
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
