import React from 'react';
import {Link} from 'react-router-dom';

const socials = [
  {
    link: '#',
    desc: 'instagram',
    icon: 'img/sprite_auto.svg#icon-instagram',
    width: '18',
    height: '18',
  },
  {
    link: '#',
    desc: 'facebook',
    icon: 'img/sprite_auto.svg#icon-facebook',
    width: '9',
    height: '17',
  },
  {
    link: '#',
    desc: 'twitter',
    icon: 'img/sprite_auto.svg#icon-twitter',
    width: '17',
    height: '14',
  },
];

const PromoSocials = () => (
  <div className="promo__socials socials">
    <ul className="promo__social-list socials__list">
      {socials.map(socialItem => {
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
