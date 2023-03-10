import { createContext, useState, useMemo } from 'react';

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
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
