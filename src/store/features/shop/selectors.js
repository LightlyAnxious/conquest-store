import {useSelector, shallowEqual} from 'react-redux';
import {createSelector} from 'reselect';
import {filterByTerms} from 'utils/filter';

const selectGoods = state => state.shop.items;
const selectSearchValue = state => state.settings.searchValue;
const selectSearchTerms = state => state.settings.searchTerms;
const selectFilteredGoods = createSelector(
  [selectGoods, selectSearchValue, selectSearchTerms],
  (items, value, terms) => items.filter(item => filterByTerms(item, terms))
);

const useFilteredGoods = () => useSelector(selectFilteredGoods, shallowEqual);
export {useFilteredGoods};
