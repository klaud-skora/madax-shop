import {
  FETCH_PRODUCT,
} from '../actions/types';

export const productReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      return action.payload;
    }
    default:
      return statePart;
  }
};
