import React from 'react';
import {Link} from 'react-router-dom';
import headerLogo from 'assets/images/header-logo.svg';
import SearchForm from './components/SearchForm/SearchForm';
import HeaderNav from './components/HeaderNav/HeaderNav';

const PageHeader = props => (
  <header className="page-header">
    <div className="page-header__wrap container container--page">
      <Link to="/" className="page-header__logo-link" aria-label="На главную">
        <img className="logo__image" src={headerLogo} alt="логотип Conquest" />
      </Link>
      <HeaderNav />

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
    </div>
  </header>
);

export default PageHeader;
