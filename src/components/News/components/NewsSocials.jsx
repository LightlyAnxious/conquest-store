import React from 'react';
import {Link} from 'react-router-dom';
import {news} from 'config/site-content';

const NewsSocials = () => {
  const socialItems = news.map(item => {
    const {link, desc, icon, width, height} = item;

    return (
      <li key={icon} className="news__social-item socials__item">
        <Link
          to={link}
          className="news__social-link socials__link"
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
  });

  return (
    <div className="news__socials socials">
      <ul className="news__social-list socials__list">{socialItems}</ul>
    </div>
  );
};

export default NewsSocials;
