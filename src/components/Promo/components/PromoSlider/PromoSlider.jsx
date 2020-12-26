import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Image, Placeholder} from 'cloudinary-react';
import PropTypes from 'prop-types';
import {ReactComponent as Ruble} from 'assets/images/ruble.svg';

import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

SwiperCore.use([Autoplay, EffectFade]);

const PromoSlider = ({slides = [], height = 0}) => {
  if (!slides) {
    return null;
  }

  const preparedSlides = slides.map((slide, index) => {
    const {id, price, diameter} = slide;
    return (
      <SwiperSlide key={id} tag="li" className="promo__slide">
        <div className="promo__item">
          <p className="promo__price">
            {price}
            <Ruble className="promo__currency" />
          </p>
          <p className="promo__diameter">{diameter} мм диаметр</p>
          <Image
            className="promo__image"
            cloudName="funcrusher"
            publicId={id}
            fetchFormat="auto"
            crop="scale"
            width="auto"
            dpr="auto"
            responsive>
            <Placeholder type="pixelate" />
          </Image>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="promo__slider"
      style={{height: `${height}px`}}
      wrapperTag="ul"
      // autoplay={{delay: 5000}}
      speed={1000}
      effect="fade">
      {preparedSlides}
    </Swiper>
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
