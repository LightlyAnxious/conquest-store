import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from 'const';

import './HeaderNav.scss';

const HeaderNav = () => (
  <nav id="menu" className="page-header__menu menu">
    <ul id="menu-list" className="menu__list">
      <li className="menu__item">
        <Link
          className="menu__page-link"
          to={AppRoute.CATALOG}
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
          to={AppRoute.DELIVERY}
          aria-label="Доставка">
          Доставка
        </Link>
      </li>
      <li className="menu__item">
        <Link
          className="menu__page-link"
          to={AppRoute.CONTACTS}
          aria-label="Контакты">
          Контакты
        </Link>
      </li>
    </ul>
  </nav>
);
export default HeaderNav;
