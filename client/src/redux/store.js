import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { initialState} from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import products from './productsRedux';

// combine reducers
const reducers = combineReducers({
  products,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
