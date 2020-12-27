import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from 'const';
import BestsellersList from './components/BestsellersList';

const bestWatches = [
  {
    title: 'Rado',
    price: 65300,
    image: 'bestsellers/rado-1_2x_wpnv13',
    id: 'rado-1_2x_wpnv13',
  },
  {
    title: 'Rado',
    price: 65300,
    image: 'bestsellers/rado-2_2x_whjky8',
    id: 'rado-2_2x_whjky8',
  },
  {
    title: 'Bulgari',
    price: 81700,
    image: 'bestsellers/bulgari-1_2x_tzeiqh',
    id: 'bulgari-1_2x_tzeiqh',
  },
  {
    title: 'Bulgari',
    price: 72700,
    image: 'bestsellers/bulgari-2_2x_acdubi',
    id: 'bulgari-2_2x_acdubi',
  },
];

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
