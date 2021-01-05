import actionTypes from './actionTypes';

const {TOGGLE_MENU} = actionTypes;

const initialState = {
  menu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
