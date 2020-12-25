import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';

const UserSection = () => (
  <div className="page-header__user-section">
    <SearchForm />

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

export default UserSection;
