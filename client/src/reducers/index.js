import { combineReducers } from 'redux';

import { productsReducer } from './productsReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { searchStringReducer } from './searchStringReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  searchString: searchStringReducer,
});

export default rootReducer;
