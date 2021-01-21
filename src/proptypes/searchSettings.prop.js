import PropTypes from 'prop-types';

export default PropTypes.shape({
  top: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});
