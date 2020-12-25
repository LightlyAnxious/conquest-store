import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Image, Placeholder} from 'cloudinary-react';
import PropTypes from 'prop-types';
import classes from './PromoSlider.module.css';

import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

SwiperCore.use([Autoplay, EffectFade]);

const PromoSlider = ({slides = [], height = 0}) => {
  if (!slides) {
    return null;
  }

  const preparedSlides = slides.map((slide, index) => (
    <SwiperSlide key={slide} tag="li" className="promo__slide">
      <Image
        className={`${classes.slide} promo__image`}
        cloudName="funcrusher"
        publicId={slide}
        fetchFormat="auto"
        crop="scale"
        width="auto"
        responsive>
        <Placeholder type="pixelate" />
      </Image>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={`${classes.slider} promo__slider`}
      style={{height: `${height}px`}}
      wrapperTag="ul"
      autoplay={{delay: 5000}}
      speed={1000}
      effect="fade">
      {preparedSlides}
    </Swiper>
  );
};

PromoSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number.isRequired,
};

export default PromoSlider;
