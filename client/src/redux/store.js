import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { initialState} from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { reducer as productsReducer } from './productsRedux';

// combine reducers
const reducers = combineReducers({
  products: productsReducer,
});

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

