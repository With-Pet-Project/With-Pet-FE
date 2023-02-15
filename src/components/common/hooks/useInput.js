import { useState } from 'react';

export function useInput(validation = () => true) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const isValid = validation(value);

  return { value, setValue, handleChange, isValid };
}
