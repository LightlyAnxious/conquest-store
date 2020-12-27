import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import useComponentVisible from 'hooks/useComponentVisible';
import watchesPropTypes from 'proptypes/watches.prop';
import SearchTipList from './components/SearchTipList/SearchTipList';

const SearchForm = ({watches = [], onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = !searchTerm
    ? null
    : watches.filter(watch =>
        watch.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(
    false
  );

  const searchFieldClasses = classNames('search__field', {
    'search__field--expanded': isComponentVisible,
  });

  const handleChange = evt => {
    setSearchTerm(() => evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  const handleSearchBtnClick = () => {
    setIsComponentVisible(() => true);
    if (isComponentVisible) {
      return null;
    }
    return null;
  };

  useEffect(() => onSearch(isComponentVisible), [isComponentVisible, onSearch]);

  return (
    <form
      ref={ref}
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="page-header__search search">
      <label className="search__title" htmlFor="search__field">
        <span className="visually-hidden">Поиск</span>
        <input
          onChange={handleChange}
          id="search-field"
          className={searchFieldClasses}
          type="search"
          name="nav-search"
          autoComplete="off"
          aria-labelledby="search-btn"
          defaultValue=""
        />
      </label>
      {searchResults && <SearchTipList searchResults={searchResults} />}

      <button
        onClick={handleSearchBtnClick}
        type="button"
        id="search-btn"
        className="search__btn"
        aria-label="Развернуть поиск"
        aria-controls="search-field">
        <svg className="search__icon" width="17" height="17">
          <use xlinkHref="img/sprite_auto.svg#icon-search" />
        </svg>
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  watches: watchesPropTypes,
};

export default SearchForm;
