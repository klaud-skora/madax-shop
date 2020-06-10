// selectors
export const getSearchString = ({searchString}) => searchString;

// action name creator
const reducerName = 'searchStrings';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_STRING = createActionName('CHANGE_STRING');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE_STRING });

// reducer
export const reducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case CHANGE_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

