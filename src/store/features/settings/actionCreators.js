import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';

const {TOGGLE_MENU} = actionTypes;

const useActions = () => {
  const dispatch = useDispatch();
  const toggleMenu = isOpened =>
    dispatch({
      type: TOGGLE_MENU,
      payload: isOpened,
    });
  return {toggleMenu};
};

export default useActions;
