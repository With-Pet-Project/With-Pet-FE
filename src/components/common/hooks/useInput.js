import { useState } from 'react';

export function useInput(validation = () => true) {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const isFocus = () => setFocus(true);
  const isBlur = () => setFocus(false);

  const isValid = () => setValid(validation(value));

  return {
    value,
    setValue,
    handleChange,
    focus,
    isFocus,
    isBlur,
    valid,
    isValid,
  };
}
