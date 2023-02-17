/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
import { createContext, useContext, useState, useMemo, useRef } from 'react';
import { vars } from 'lib/styles/vars';

import styled from 'styled-components';

export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export const ModalsStateContext = createContext([]);

export function ModalsProvider({ children }) {
  const [modalList, setModalList] = useState([]);

  const open = (Component, props) => {
    setModalList(modals => {
      return [...modals, { Component, props }];
    });
  };
  const close = Component => {
    setModalList(modals => {
      return modals.filter(modal => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={modalList}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        <Modal />
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}

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

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  right: 0;
  width: calc(100% - ${vars.sidebarOpened}); // ${vars.sidebarClosed}
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: white;
  padding: 1em;
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
