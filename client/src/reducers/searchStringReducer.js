import { CHANGE_STRING } from '../actions/types';

export const searchStringReducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case CHANGE_STRING:
      return action.payload;
    default:
      return statePart;
  }
};
