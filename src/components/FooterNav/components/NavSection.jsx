import React from 'react';
import PropTypes from 'prop-types';
import NavItemsList from './NavItemsList';

const NavSection = ({sectionTitle, sectionItems, sectionClass}) => (
  <div
    className={`page-footer__container page-footer__container--${sectionClass}`}>
    <h3 className="page-footer__title">{sectionTitle}</h3>
    <NavItemsList sectionItems={sectionItems} />
  </div>
);

NavSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
  sectionItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavSection;
