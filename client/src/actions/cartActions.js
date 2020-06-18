import Axios from 'axios';
import { API_URL } from '../config';

import  {
  FETCH_CART_START,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  SET_CART,
  CHANGE_AMOUNT,
  DELETE_PRODUCT,
  SUBMIT_ORDER,
  CLEAN_CART,
} from './types';

export const fetchCartStarted = payload => ({ payload, type: FETCH_CART_START });
export const fetchCartSuccess = payload => ({ payload, type: FETCH_CART_SUCCESS });
export const fetchCartError = payload => ({ payload, type: FETCH_CART_ERROR });

export const setCart = (product, amount) => {
  product.amount = amount;
  product.price = product.price * amount;
  return { product, type: SET_CART };
};

export const changeAmount = (amount, id) => {
  return { amount, id, type: CHANGE_AMOUNT };
};

export const deleteProduct = payload => {
  return { payload, type: DELETE_PRODUCT };
};

export const submitOrder = payload => ({ payload, type: SUBMIT_ORDER });
export const cleanCart = payload => {
  return ({ payload, type: CLEAN_CART });
};

/* thunk creators */
export const submitOrderRequest = () => {

  return async dispatch => {
    dispatch(fetchCartStarted);
    try {
      let res = await Axios.get(`${API_URL}/cart`);
      dispatch(fetchCartSuccess(res.data));
    }
    catch(err) {
      dispatch(fetchCartError(err.message || true));
    }
  };
};
