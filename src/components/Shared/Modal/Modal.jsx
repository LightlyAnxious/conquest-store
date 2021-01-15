import React from 'react';
import {createPortal} from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({children, left, right, center, width, height}) => {
  const classes = cx('modal', {['modal--right']: right});

  return createPortal(
    <div className={classes}>
      <p>I&apos;m the modal</p>
      {children}
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
