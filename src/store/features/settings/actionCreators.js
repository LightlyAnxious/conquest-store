import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';

const {TOGGLE_MENU, TOGGLE_SEARCH, SET_SEARCH_TERMS} = actionTypes;

const useActions = () => {
  const dispatch = useDispatch();
  const toggleMenu = isOpened =>
    dispatch({
      type: TOGGLE_MENU,
      payload: isOpened,
    });
  const toggleSearch = isOpened =>
    dispatch({
      type: TOGGLE_SEARCH,
      payload: isOpened,
    });
  const setSearchTerms = terms =>
    dispatch({
      type: SET_SEARCH_TERMS,
      payload: terms,
    });
  return {toggleMenu, toggleSearch, setSearchTerms};
};

export default useActions;
