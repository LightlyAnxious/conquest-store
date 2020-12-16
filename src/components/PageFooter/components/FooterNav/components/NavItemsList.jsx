import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItemsList = ({sectionItems}) => (
  <ul className="page-footer__list">
    {sectionItems.map(navItem => {
      const {title, link} = navItem;
      return (
        <li key={title} className="page-footer__item">
          <Link className="page-footer__link" to={link} aria-label={title}>
            {title}
          </Link>
        </li>
      );
    })}
  </ul>
);

NavItemsList.propTypes = {
  sectionItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavItemsList;
