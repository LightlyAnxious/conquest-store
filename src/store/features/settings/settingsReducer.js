import actionTypes from './actionTypes';

const {TOGGLE_MENU, TOGGLE_SEARCH, SET_SEARCH_TERMS} = actionTypes;

const initialState = {
  menu: false,
  search: false,
  searchValue: '',
  searchTerms: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_SEARCH_TERMS:
      return {
        ...state,
        searchTerms: {...action.payload},
      };

    default:
      return state;
  }
};

export default reducer;
