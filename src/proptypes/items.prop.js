import PropTypes from 'prop-types';

export default PropTypes.arrayOf({
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
});
