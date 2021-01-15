import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'components/shared/Modal/Modal';
import childrenPropTypes from 'proptypes/children.prop';
import {useModal, useModalContext} from './hooks';

const ModalProvider = ({children, settings}) => {
  const {modal, handleModal} = useModal();
  const {Provider} = useModalContext();

  return (
    <Provider value={{modal, handleModal}}>
      {!modal && <Modal {...settings}>{children}</Modal>}
    </Provider>
  );
};

ModalProvider.propTypes = {
  children: childrenPropTypes,
  settings: PropTypes.shape({
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default ModalProvider;
