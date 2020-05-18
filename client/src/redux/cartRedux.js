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

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const setCart = (product, amount) => {
  product.amount = amount;
  product.price = product.price * amount;
  return { product, type: SET_CART };
};

// /* thunk creators */
// export const loadCartRequest = () => {

//   return async dispatch => {
//     dispatch(fetchStarted);
//     try {
//       let res = await Axios.get(`${API_URL}/cart`);
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
    case SET_CART: {
      return {
        ...statePart,
        products: [...statePart.products, {...action.product}],
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
