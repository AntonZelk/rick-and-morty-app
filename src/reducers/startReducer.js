import { START_APP } from '../actions/types';

const initialState = {
  isStart: false,
};

export const startReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, isStart: true };
    default:
      return state;
  }
};
