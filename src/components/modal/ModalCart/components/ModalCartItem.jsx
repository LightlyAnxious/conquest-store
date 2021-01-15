import PropTypes from 'prop-types';
import React from 'react';
import Img from 'react-cloudinary-lazy-image';
import {CDN_URL} from 'const';
import {modalItemSize} from 'config/images';

const ModalCartItem = ({name, brand, price, image, quantity}) => (
  <li className="modal-cart__item">
    <div className="modal-cart__header">
      <h3 className="modal-cart__name">{name}</h3>
      <b className="modal-cart__brand">{brand}</b>
    </div>
    <div className="modal-cart__desc">
      <div className="modal-cart__media">
        <Img
          cloudName={CDN_URL}
          imageName={image}
          urlParams="dpr_auto"
          fluid={{
            maxWidth: modalItemSize,
          }}
        />
      </div>
      <div className="modal-cart__controls">
        <button
          type="button"
          id="delete-btn"
          className="modal-cart__delete close-btn"
          aria-label="Удалить из избранного"
        />
        <div className="modal-cart__qty-wrapper">
          <span
            type="number"
            id="quantity"
            name="quantity"
            className="modal-cart__qty">
            {quantity}
          </span>
          <span>x</span>
          <span className="modal-cart__price">{`${price} ₽`}</span>
        </div>
      </div>
    </div>
  </li>
);

ModalCartItem.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default ModalCartItem;
