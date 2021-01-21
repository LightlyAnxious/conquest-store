import PropTypes from 'prop-types';
import React, {useState} from 'react';
import watchesPropTypes from 'proptypes/watches.prop';
import watchesMock from 'mocks/items.mock';
import {useFilteredGoods} from 'store/features/shop/index';
import SearchTipList from './components/SearchTipList/SearchTipList';

const SearchForm = ({watches = watchesMock, onSearch = () => {}}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useFilteredGoods();

  const handleChange = evt => {
    setSearchTerm(() => evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="modal-search__form">
      <label className="modal-search__label" htmlFor="search__field">
        <span className="visually-hidden">Поиск</span>
        <input
          onChange={handleChange}
          id="search-field"
          className="modal-search__field"
          type="search"
          name="nav-search"
          autoComplete="off"
          aria-labelledby="search-btn"
          defaultValue=""
        />
        {searchTerm && (
          <button
            className="modal-search__submit-btn"
            type="submit"
            aria-label="Искать">
            <svg
              className="search__icon search__icon--modal"
              width="17"
              height="17">
              <use xlinkHref="img/sprite_auto.svg#icon-search" />
            </svg>
          </button>
        )}
      </label>
      {searchResults && <SearchTipList searchResults={searchResults} />}
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  watches: watchesPropTypes,
};

export default SearchForm;
