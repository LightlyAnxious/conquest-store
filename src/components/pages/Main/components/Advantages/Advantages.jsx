import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import {AdvantagesList} from './components/AdvantagesList';

const Advantages = props => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    draggable: false,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(() => next + 1),
  };

  return (
    <section className="advantages">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="advantages__wrap">
        <Slider ref={sliderRef} {...settings} className="adavantages__list">
          {AdvantagesList()}
        </Slider>
        <div className="advantages__controls">
          <button
            type="button"
            onClick={() => sliderRef.current.slickPrev()}
            className="advantages__control-btn advantages__control-btn--prev">
            <span className="visually-hidden">К предыдущему слайду</span>
          </button>
          <p className="advantages__slider-progress">{currentSlide}</p>
          <button
            type="button"
            onClick={() => sliderRef.current.slickNext()}
            className="advantages__control-btn advantages__control-btn--next">
            <span className="visually-hidden">К следующему слайду</span>
          </button>
        </div>
      </div>
    </section>
  );
};

Advantages.propTypes = {};

export default Advantages;
