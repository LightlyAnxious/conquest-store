import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from 'const';

const PromoCollection = () => (
  <div className="promo__collection">
    <h2 className="promo__title">Весна/Лето 2019</h2>
    <span className="promo__subtitle">Коллекция</span>
    <p className="promo__desc">
      Швейцарские часы в наличии в Москве и с доставкой по всему миру
    </p>
    <Link to={AppRoute.CATALOG} className="promo__btn btn btn--grey">
      Смотреть каталог
    </Link>
  </div>
);

export default PromoCollection;
