import {useDispatch} from 'react-redux';
import actionTypes from './actionTypes';

const {LOAD_ITEMS} = actionTypes;

const useActions = () => {
  const dispatch = useDispatch();
  const loadItems = items =>
    dispatch({
      type: LOAD_ITEMS,
      items,
    });
  return {loadItems};
};

export default useActions;
