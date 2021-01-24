import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withActiveState from 'hocs/withActiveState';

import './HamburgerBtn.scss';

const HamburgerBtn = ({isActive, onBtnClick, onChangeActive}) => {
  const burgerBtnClasses = classNames('menu__btn', 'hamburger-btn', {
    'hamburger-btn--active': isActive,
  });

  const handleClick = () => {
    onBtnClick();
    onChangeActive();
  };

  return (
    <button
      onClick={handleClick}
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
  onChangeActive: PropTypes.func.isRequired,
};

export default withActiveState(HamburgerBtn);
