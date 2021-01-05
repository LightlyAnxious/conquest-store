import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import HamburgerBtn from 'components/Shared/HamburgerBtn/HamburgerBtn';
import useActions from 'store/features/settings/actionCreators';
import withActiveState from 'hocs/withActiveState';
import SearchForm from './components/SearchForm/SearchForm';

import './UserSection.scss';

const UserSection = ({isActive, onChangeActive, onSearch}) => {
  const {toggleMenu} = useActions();
  /* eslint-disable */
  useEffect(() => {
    toggleMenu(isActive);
  }, [isActive]);
  /* eslint-enable */
  return (
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
      <HamburgerBtn onBtnClick={onChangeActive} isActive={isActive} />
    </div>
  );
};

UserSection.propTypes = {
  isActive: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  onChangeActive: PropTypes.func.isRequired,
};

export default withActiveState(UserSection);
