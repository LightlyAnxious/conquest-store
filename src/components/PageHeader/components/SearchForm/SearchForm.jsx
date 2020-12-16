import React from 'react';

const SearchForm = () => (
  <form action="#" method="post" className="page-header__search search">
    <label className="search__title" htmlFor="search-field">
      <span className="visually-hidden">Поиск</span>
      <input
        id="search-field"
        className="search__field"
        type="search"
        name="nav-search"
        autoComplete="off"
        aria-labelledby="search-btn"
      />
    </label>

    <button
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

export default SearchForm;
