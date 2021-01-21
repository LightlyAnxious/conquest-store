import {useState} from 'react';

const useModal = isComponentVisible => {
  const [modal, setModal] = useState(isComponentVisible);
  const [modalContent, setModalContent] = useState("I'm the modal content");

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return {modal, handleModal, modalContent};
};

export default useModal;
