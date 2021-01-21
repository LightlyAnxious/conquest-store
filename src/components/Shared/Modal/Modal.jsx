import React from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({component: Component = 'div', children, classes = ''}) =>
  createPortal(
    <Component className={`${styles.modal} ${classes}`}>{children}</Component>,
    document.querySelector('#modal-root')
  );

export default Modal;
