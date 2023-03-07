import { useState } from 'react';

export function useInput(validation = () => true) {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const isValid = () => setValid(validation(value));

  return {
    value,
    setValue,
    handleChange,
    valid,
    isValid,
  };
}
