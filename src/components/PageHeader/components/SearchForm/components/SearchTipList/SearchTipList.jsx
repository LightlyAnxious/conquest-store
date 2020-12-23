import React from 'react';
import watchesPropTypes from 'proptypes/watches.prop';
import SearchTipItem from '../SearchTipItem/SearchTipItem';

const SearchTipList = ({searchResults = []}) => {
  const renderSearchTip = () =>
    searchResults
      ? searchResults.map(result => <SearchTipItem searchResult={result} />)
      : null;

  return renderSearchTip();
};

SearchTipList.propTypes = {
  searchResults: watchesPropTypes.isRequired,
};

export default SearchTipList;
