import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { initialState} from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof rootReducer[item] == 'undefined') {
    rootReducer[item] = (statePart = null) => statePart;
  }
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

