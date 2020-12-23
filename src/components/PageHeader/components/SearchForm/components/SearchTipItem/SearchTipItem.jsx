import React from 'react';
import watchItemPropTypes from 'proptypes/watchItem.prop';

const SearchTipItem = ({searchResult = null}) => {
  const renderSearchTip = () => {
    const {name, img: image} = searchResult;
    return (
      <li>
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </li>
    );
  };

  return searchResult ? renderSearchTip() : null;
};

SearchTipItem.propTypes = {
  searchResult: watchItemPropTypes.isRequired,
};

export default SearchTipItem;
