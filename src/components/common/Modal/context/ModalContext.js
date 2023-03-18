import { createContext, useState, useMemo } from 'react';

export const ModalsDispatchContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalsStateContext = createContext([]);

export function ModalsProvider({ children }) {
  const [modalList, setModalList] = useState([]);

  const openModal = (Component, props) => {
    setModalList(modals => {
      return [...modals, { Component, props }];
    });
  };
  const closeModal = Component => {
    setModalList(modals => {
      return modals.filter(modal => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ openModal, closeModal }), []);

  return (
    <ModalsStateContext.Provider value={modalList}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
