import React from 'react';
import Slider from 'react-slick';
import Img from 'react-cloudinary-lazy-image';
import {CDN_URL} from 'const';
import {promoSizes} from 'config/images';
import {promo} from 'config/site-content';
import {detectScreen} from 'utils/common';
import useWindowSize from 'hooks/useWindowSize';
import PropTypes from 'prop-types';
import {ReactComponent as Ruble} from 'assets/images/ruble.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromoSlider = ({slides = promo, height = 0}) => {
  const {width} = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    draggable: false,
    fade: true,
  };

  if (!slides) {
    return null;
  }

  const preparedSlides = slides.map((slide, index) => {
    const {id, price, diameter, image} = slide;

    return (
      <div key={id} className="promo__slide">
        <div className="promo__item">
          <p className="promo__price">
            {price}
            <Ruble className="promo__currency" />
          </p>
          <p className="promo__diameter">{diameter} мм диаметр</p>
          <Img
            cloudName={CDN_URL}
            imageName={image}
            urlParams="dpr_auto"
            fluid={{
              maxWidth: promoSizes[detectScreen(width)],
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <Slider
      {...settings}
      style={{height: `${height}px`}}
      className="promo__slider">
      {preparedSlides}
    </Slider>
  );
};

PromoSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired,
    })
  ),
  height: PropTypes.number.isRequired,
};

export default PromoSlider;
