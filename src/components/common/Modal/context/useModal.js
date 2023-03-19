import { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext';

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalsDispatchContext);
  const modalList = useContext(ModalsStateContext);

  return {
    openModal,
    closeModal,
    modalList,
  };
};
