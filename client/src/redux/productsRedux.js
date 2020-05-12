// import Axios from 'axios';
// import { API_URL } from '../config';

/* selectors */
export const getAll = ({ products }) => products;
export const getProductById = ({ products }, id) => {
  const filteredProducts = products.filter(product => product.id == id);
  return filteredProducts.length ? filteredProducts[0] : {error: true};
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */
// export const loadProductsRequest = () => {
//   return async dispatch => {
//     dispatch(fetchStarted);

//     try {
//       let res = await Axios.get(`${API_URL}/posts`);
//       dispatch(fetchSuccess(res.data));
//     }
//     catch(err) {
//       dispatch(fetchError(err.message || true));
//     }
//   };
// };

/* REDUCER */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
