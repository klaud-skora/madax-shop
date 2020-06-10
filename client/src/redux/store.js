import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { initialState} from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { reducer as productsReducer } from './productsRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as searchStringReducer } from './searchStringRedux';

// combine reducers
const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  searchString: searchStringReducer,
});

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

