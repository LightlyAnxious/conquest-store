import React from 'react';
import {Link} from 'react-router-dom';
import {promoSocials} from 'config/site-content';

import './PromoSocials.scss';

const PromoSocials = () => (
  <div className="promo__socials socials">
    <ul className="promo__social-list socials__list">
      {promoSocials.map(socialItem => {
        const {link, desc, icon, width, height} = socialItem;

        return (
          <li key={desc} className="socials__item">
            <Link
              to={link}
              className="socials__link"
              target="_blank"
              aria-label={`Conquest в ${desc}`}>
              <svg
                className="socials__icon socials__icon--instagram"
                width={width}
                height={height}>
                <use xlinkHref={icon} />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default PromoSocials;
