import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import useActiveState from 'hooks/useActiveState';

import './HeaderNav.css';

const HeaderNav = () => {
  const {isActive, setIsActive} = useActiveState();
  const menuClasses = classNames('page-header__menu', 'menu', {
    'menu--shown': isActive,
  });
  const burgerBtnClasses = classNames('menu__btn', 'hamburger-btn', {
    'hamburger-btn--active': isActive,
  });
  const wrapperClasses = classNames('menu__wrap', {
    'menu__wrap--fullscreen': isActive,
  });
  const menuListClasses = classNames('menu__list', {
    'menu__list--shown': isActive,
  });
  const handleClick = () => setIsActive(() => !isActive);

  return (
    <nav id="menu" className={menuClasses}>
      <div className={wrapperClasses}>
        <button
          onClick={handleClick}
          type="button"
          className={burgerBtnClasses}
          aria-label="Открыть меню"
          aria-expanded="false">
          <span className="hamburger-btn__body" />
        </button>
        <ul id="menu-list" className={menuListClasses}>
          <li className="menu__item">
            <Link
              className="menu__page-link"
              to="/catalog"
              aria-label="Каталог">
              Каталог
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__page-link" to="#" aria-label="Акции">
              Акции
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__page-link"
              to="/delivery"
              aria-label="Доставка">
              Доставка
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__page-link"
              to="/contacts"
              aria-label="Контакты">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
