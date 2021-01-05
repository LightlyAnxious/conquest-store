import React from 'react';
import {Link} from 'react-router-dom';
import Img from 'react-cloudinary-lazy-image';
import {AppRoute, CDN_URL} from 'const';
import {advantagesSizes} from 'config/images';
import {advantages as advantagesItems} from 'config/site-content';
import {detectScreen} from 'utils/common';
import useWindowSize from 'hooks/useWindowSize';

const AdvantagesList = () => {
  const {width} = useWindowSize();

  return advantagesItems.map(item => {
    const {title, id, desc, image} = item;

    return (
      <div key={id} className="advantages__item">
        <div className="advantages__media-wrap">
          <Img
            cloudName={CDN_URL}
            imageName={image}
            urlParams="dpr_auto"
            fluid={{
              maxWidth: advantagesSizes[detectScreen(width)],
            }}
          />
        </div>
        <div className="advantages__content">
          <h3 className="advantages__title">{title}</h3>
          <p className="advantages__desc">{desc}</p>
          <Link
            to={AppRoute.CATALOG}
            aria-label="Смотреть каталог"
            className="btn btn--beige advantages__btn">
            Смотреть каталог
          </Link>
        </div>
      </div>
    );
  });
};

export default AdvantagesList;
