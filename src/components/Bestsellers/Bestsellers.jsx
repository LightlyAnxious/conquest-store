import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from 'const';
import {bestWatches} from 'config/site-content';
import {BestsellersList} from './components';

const Bestsellers = () => {
  return (
    <section className="bestsellers">
      <div className="container bestsellers__wrap">
        <h2 className="bestsellers__title">Популярные модели</h2>
        <Link
          className="bestsellers__link"
          to={AppRoute.BESTSELLERS}
          aria-label="Смотреть все популярные модели">
          Смотреть все
        </Link>

        <div className="bestsellers__inner bestsellers__inner--top">
          <BestsellersList bestWatches={bestWatches.slice(0, 2)} />
        </div>

        <div className="bestsellers__inner bestsellers__inner--bottom">
          <BestsellersList bestWatches={bestWatches.slice(2, 4)} />
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
