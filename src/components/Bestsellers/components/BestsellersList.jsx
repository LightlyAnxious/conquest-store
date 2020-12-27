import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Image, Placeholder} from 'cloudinary-react';
import {CDN_URL} from 'const';

const BestsellersList = ({bestWatches}) => {
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
          <Image
            className="bestsellers__image"
            cloudName="funcrusher"
            publicId={`${CDN_URL}${image}`}
            fetchFormat="auto"
            crop="scale"
            width="auto"
            dpr="auto"
            alt={`Часы ${title}`}
            responsive>
            <Placeholder type="pixelate" />
          </Image>
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
