import { createContext, useContext, useRef } from 'react';

const refContext = createContext();

export const useRefContext = () => useContext(refContext);

export default function RefContextProvider({ children }) {
  const targetRef = useRef([]);

  const value = targetRef;

  return <refContext.Provider value={value}>{children}</refContext.Provider>;
}
