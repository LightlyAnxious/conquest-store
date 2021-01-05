import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from 'react-cloudinary-lazy-image';
import {CDN_URL} from 'const';
import {bestsellersSizes} from 'config/images';
import {detectScreen} from 'utils/common';
import useWindowSize from 'hooks/useWindowSize';

const BestsellersList = ({bestWatches}) => {
  const {width} = useWindowSize();

  if (!bestWatches) {
    return null;
  }

  const currentWatches = bestWatches.map(watch => {
    const {title, price, image, id} = watch;

    return (
      <li key={id} className="bestsellers__item">
        <h3 className="bestsellers__item-title">
          <Link
            to={`/${title.toLowerCase()}`}
            className="bestsellers__brand-link"
            aria-label="Вся продукция бренда">
            Rado
          </Link>
        </h3>
        <p className="bestsellers__price">{price} ₽</p>
        <div className="bestsellers__media-wrap">
          <Img
            className="bestsellers__image"
            cloudName={CDN_URL}
            imageName={image}
            urlParams="dpr_auto"
            fluid={{
              maxWidth: bestsellersSizes[detectScreen(width)],
            }}
          />
        </div>
        <Link
          to={`/card/${id}`}
          className="bestsellers__details-link"
          aria-label="К карточке товара">
          Подробнее
        </Link>
      </li>
    );
  });

  return <ul className="bestsellers__list">{currentWatches}</ul>;
};

BestsellersList.propTypes = {
  bestWatches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default BestsellersList;
