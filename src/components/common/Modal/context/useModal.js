/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';
import { useContext, useRef } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext';

export const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const modalList = useContext(ModalsStateContext);

  console.log(modalList);
  console.log(open);
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

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: 0;
  width: calc(100% - ${vars.sidebarClosed}); // ${vars.sidebarClosed}
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: sticky;
  background: white;
  // padding: 1em;
  border-radius: 0.5em;
  margin: auto;
  box-shadow: 0px 4px 18px rgba(137, 137, 137, 0.25);
`;

export function Modal() {
  const { modalList, closeModal } = useModal();
  const modalRef = useRef([]);

  return modalList.map((modal, index) => {
    const { Component, props } = modal;

    const close = e => {
      if (!modalRef.current[index].contains(e.target)) {
        closeModal(Component);
      }
    };

    return (
      <ModalWrapper key={index} onClick={close}>
        <ModalContent ref={el => (modalRef.current[index] = el)}>
          <Component {...props} />
        </ModalContent>
      </ModalWrapper>
    );
  });
}
