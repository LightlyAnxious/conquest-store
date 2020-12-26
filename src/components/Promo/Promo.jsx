import React, {useRef, useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {slides} from 'mocks/promo.mock';
import PromoSocials from './components/PromoSocials/PromoSocials';
import PromoCollection from './components/PromoCollection/PromoCollection';
import PromoSlider from './components/PromoSlider/PromoSlider';

import './Promo.scss';

const Promo = ({addHeight}) => {
  const [promoHeight, setPromoHeight] = useState(0);
  const promoRef = useRef();

  useLayoutEffect(() => {
    setPromoHeight(
      () => promoRef.current.getBoundingClientRect().height + addHeight
    );
  }, [addHeight, promoHeight]);

  return (
    <section className="promo" ref={promoRef}>
      <div className="promo__wrap container">
        <h1 className="visually-hidden">
          Conquest - часы премиум брендов с доставкой
        </h1>
        <PromoSocials />
        <PromoCollection />
      </div>
      <PromoSlider slides={slides} height={promoHeight} />
    </section>
  );
};

Promo.propTypes = {
  addHeight: PropTypes.number.isRequired,
};

export default Promo;
