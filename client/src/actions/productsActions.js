import Axios from 'axios';
import { API_URL } from '../config';

import  {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_PRODUCT,
} from './types';

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchProduct = payload => ({ payload, type: FETCH_PRODUCT });

/* thunk creators */
export const loadProductsRequest = () => {

  return async dispatch => {
    dispatch(fetchStarted);
    try {
      let res = await Axios.get(`${API_URL}/products`);
      dispatch(fetchSuccess(res.data));
    }
    catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const loadChosedProductRequest = (id) => {

  return async dispatch => {

    try {
      let res = await Axios.get(`${API_URL}/product/${id}`);
      dispatch(fetchProduct(res.data));
    }
    catch(err) {
      dispatch(fetchProduct({}));
    }
  };
};
