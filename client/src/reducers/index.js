import { combineReducers } from 'redux';

import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { searchStringReducer } from './searchStringReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  searchString: searchStringReducer,
});

export default rootReducer;
