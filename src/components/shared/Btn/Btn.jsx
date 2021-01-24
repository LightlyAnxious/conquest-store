import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import childrenPropTypes from 'proptypes/children.prop';

import './Btn.scss';

const Btn = props => {
  const {isLink = false, path, className, children} = props;
  return isLink ? (
    <Link className={className} to={path}>
      {children}
    </Link>
  ) : (
    <button className={className} type="button">
      {children}
    </button>
  );
};

Btn.propTypes = {
  isLink: PropTypes.bool.isRequired,
  path: PropTypes.string,
  className: PropTypes.string,
  children: childrenPropTypes,
};

export default Btn;
