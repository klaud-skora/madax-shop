import Axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getCartProducts = ({ cart }) => cart.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const SET_CART = createActionName('SET_CART');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');

const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');
const CLEAN_CART = createActionName('CLEAN_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

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
  return ({ payload, type: CLEAN_CART })};

/* thunk creators */
export const submitOrderRequest = () => {

  return async dispatch => {
    dispatch(fetchStarted);
    try {
      let res = await Axios.get(`${API_URL}/cart`);
      dispatch(fetchSuccess(res.data));
    }
    catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case SET_CART: {
      return {
        ...statePart,
        products: [...statePart.products, {...action.product}],
      };
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if( product._id === action.id) return {...product, amount: action.amount};
          else return product;
        }),
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product._id !== action.payload),
      };
    }
    case CLEAN_CART: {
      return {
        ...statePart,
        products: [],
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
