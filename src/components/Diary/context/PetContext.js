import { createContext, useState, useMemo } from 'react';

export const petIdContext = createContext();

export function PetIdProvider({ children }) {
  const [petId, setPetId] = useState(0);

  const value = useMemo(() => [petId, setPetId], [petId]);

  return (
    <petIdContext.Provider value={value}>{children}</petIdContext.Provider>
  );
}
