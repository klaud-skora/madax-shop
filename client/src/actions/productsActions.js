import Axios from 'axios';
import { API_URL } from '../config';

import  {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './types';

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

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
