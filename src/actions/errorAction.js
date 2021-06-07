import { HIDE_ERROR, SHOW_ERROR } from './types';

export const showError = () => {
  return {
    type: SHOW_ERROR,
  };
};

export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};
