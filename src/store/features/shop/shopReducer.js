import itemsMock from 'mocks/items.mock';

import actionTypes from './actionTypes';

const {LOAD_ITEMS} = actionTypes;

const initialState = {
  items: itemsMock,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default reducer;
