import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'components/shared/Modal/Modal';
import childrenPropTypes from 'proptypes/children.prop';
import searchSettingsPropTypes from 'proptypes/searchSettings.prop';
import {useModal, useModalContext} from './hooks';

const ModalProvider = ({children, settings, isComponentVisible}) => {
  const {modal, handleModal} = useModal(isComponentVisible);
  const {Provider} = useModalContext();

  return (
    <Provider value={{modal, handleModal}}>
      {modal && <Modal {...settings}>{children}</Modal>}
    </Provider>
  );
};

ModalProvider.propTypes = {
  children: childrenPropTypes,
  isComponentVisible: PropTypes.bool,
  settings: searchSettingsPropTypes,
};

export default ModalProvider;
