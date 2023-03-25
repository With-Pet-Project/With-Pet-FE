import { useContext, ReactElement } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext';

interface UseModal {
  // openModal: (Component:() => ReactElement; props:any[]; ) => void;
  // closeModal: (any[]) => void;
  openModal: any; // !: 나중에 수정하기
  closeModal: any; // !: 나중에 수정하기
  modalList: object[];
}

export const useModal = (): UseModal => {
  const { openModal, closeModal } = useContext(ModalsDispatchContext);
  const modalList = useContext(ModalsStateContext);
  return {
    openModal,
    closeModal,
    modalList,
  };
};
