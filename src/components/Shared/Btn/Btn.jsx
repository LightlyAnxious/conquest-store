import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import childrenPropTypes from 'proptypes/children.prop';

import './Btn.scss';

const Btn = props => {
  const {isLink = false, path, children, className} = props;
  return isLink ? (
    <Link to={path} className={className}>
      {children}
    </Link>
  ) : (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

Btn.propTypes = {
  isLink: PropTypes.bool.isRequired,
  className: PropTypes.string,
  path: PropTypes.string,
  children: childrenPropTypes,
};

export default Btn;
