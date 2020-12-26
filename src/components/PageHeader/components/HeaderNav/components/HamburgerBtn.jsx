import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './HamburgerBtn.scss';

const HamburgerBtn = ({isActive, onBtnClick}) => {
  const burgerBtnClasses = classNames('menu__btn', 'hamburger-btn', {
    'hamburger-btn--active': isActive,
  });

  return (
    <button
      onClick={onBtnClick}
      type="button"
      className={burgerBtnClasses}
      aria-label="Открыть меню"
      aria-expanded="false">
      <span className="hamburger-btn__body" />
    </button>
  );
};

HamburgerBtn.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default HamburgerBtn;
