import ModalContext from '../ModalContext';

const useModalContext = () => {
  const context = ModalContext;

  if (!context) {
    throw new Error(
      'Modal components are compound component. Must be used inside Modal.'
    );
  }

  return context;
};

export default useModalContext;
