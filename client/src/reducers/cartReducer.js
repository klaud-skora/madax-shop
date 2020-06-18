import  {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_CART,
  CHANGE_AMOUNT,
  DELETE_PRODUCT,
  // SUBMIT_ORDER,
  CLEAN_CART,
} from '../actions/types';

export const cartReducer = (statePart = [], action = {}) => {
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
