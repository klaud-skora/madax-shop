
export const productsReducerName = 'products';
export const productReducerName = 'product';
export const cartReducerName = 'cart';
export const searchStringReducerName = 'searchString';

export const createActionName = ( reducerName, name ) => `app/${reducerName}/${name}`;

/* products */
export const FETCH_START = createActionName(productsReducerName, 'FETCH_START');
export const FETCH_SUCCESS = createActionName(productsReducerName, 'FETCH_SUCCESS');
export const FETCH_ERROR = createActionName(productsReducerName, 'FETCH_ERROR');

export const FETCH_PRODUCT = createActionName(productReducerName, 'FETCH_PRODUCT');

/* cart */
export const FETCH_CART_START = createActionName(cartReducerName, 'FETCH_CART_START');
export const FETCH_CART_SUCCESS = createActionName(cartReducerName, 'FETCH_CART_SUCCESS');
export const FETCH_CART_ERROR = createActionName('FETCH_CART_ERROR');
export const SET_CART = createActionName(cartReducerName, 'SET_CART');
export const CHANGE_AMOUNT = createActionName(cartReducerName, 'CHANGE_AMOUNT');
export const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
export const SUBMIT_ORDER = createActionName(cartReducerName, 'SUBMIT_ORDER');
export const CLEAN_CART = createActionName(cartReducerName, 'CLEAN_CART');

/* searchString */
export const CHANGE_STRING = createActionName(searchStringReducerName, 'CHANGE_STRING');
