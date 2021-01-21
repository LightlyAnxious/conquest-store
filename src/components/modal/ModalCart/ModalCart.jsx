import React from 'react';
import PropTypes from 'prop-types';
import itemsPropTypes from 'proptypes/items.prop';
import Btn from 'components/shared/Btn';
import {AppRoute} from 'const';
import watches from 'mocks/items.mock';
import ModalCartItem from './components/ModalCartItem';

import './ModalCart.scss';

const ModalCart = ({isOpened, items = watches, totalPrice}) => {
  const renderCartItems = () =>
    items.map(item => {
      const {id, name, brand, price, image, quantity = 1} = item;
      return (
        <ModalCartItem
          key={id}
          name={name}
          brand={brand}
          price={price}
          image={image}
          quantity={quantity}
        />
      );
    });

  if (!isOpened) {
    return null;
  }

  return (
    <section className="modal-cart">
      <h2 className="modal-cart__title">Корзина</h2>
      {!items && <p className="modal-cart__tip">В корзине пока нет товаров</p>}

      {items && <ul className="modal-cart__list">{renderCartItems()}</ul>}

      {totalPrice && (
        <div className="modal-cart__subtotal">
          <span className="modal-cart__subtitle">Итого</span>
          <b className="modal-cart__price">{`${totalPrice} ₽`}</b>
        </div>
      )}

      {items ? (
        <Btn
          isLink
          path={AppRoute.CART}
          className="modal-cart__link modal-cart__link--cart btn btn--transparent">
          Перейти в корзину
        </Btn>
      ) : (
        <Btn
          isLink
          path={AppRoute.CATALOG}
          className="modal-cart__link modal-cart__link--cart btn btn--transparent">
          К каталогу
        </Btn>
      )}
    </section>
  );
};

ModalCart.propTypes = {
  isOpened: PropTypes.bool,
  items: itemsPropTypes,
  totalPrice: PropTypes.number,
};

export default ModalCart;
