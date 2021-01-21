import {useSelector} from 'react-redux';

const selectMenu = state => state.settings.menu;
const selectSearchState = state => state.settings.search;

const useMenuState = () => useSelector(selectMenu);
const useSearchState = () => useSelector(selectSearchState);
export {useMenuState, useSearchState};
