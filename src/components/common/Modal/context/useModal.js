import { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext';

export const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const modalList = useContext(ModalsStateContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = Component => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
    modalList,
  };
};
