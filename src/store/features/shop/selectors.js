import {useSelector, shallowEqual} from 'react-redux';
import {createSelector} from 'reselect';
import {filterByTerms} from 'utils/filter';

const selectGoods = state => state.shop.items;
const selectSearchTerms = state => state.settings.searchTerms;
const selectFilteredGoods = createSelector(
  [selectGoods, selectSearchTerms],
  (items, terms) => items.filter(item => filterByTerms(item, terms))
);

const useFilteredGoods = () => useSelector(selectFilteredGoods, shallowEqual);
export {useFilteredGoods};
