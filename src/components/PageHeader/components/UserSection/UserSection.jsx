import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';

import './UserSection.scss';

const UserSection = ({onSearch}) => (
  <div className="page-header__user-section">
    <SearchForm onSearch={onSearch} />

    <Link
      to="#"
      id="favorites"
      className="page-header__link page-header__link--favorites"
      aria-label="Избранное">
      <svg width="20" height="17">
        <use xlinkHref="img/sprite_auto.svg#icon-like" />
      </svg>
      <span id="likes-counter" className="page-header__link-body" />
    </Link>

    <Link
      to="/"
      id="cart-toggle"
      className="page-header__link page-header__link--cart"
      aria-label="Корзина">
      <svg width="19" height="17">
        <use xlinkHref="img/sprite_auto.svg#icon-cart" />
      </svg>
      <span id="cart-counter" className="page-header__link-body" />
    </Link>
  </div>
);

UserSection.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default UserSection;
