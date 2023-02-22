/* eslint-disable react/destructuring-assignment */
import { forwardRef } from 'react';
import './Input.scss';

function Input(
  { className, type, name, accept, onChange, onClick, disabled },
  ref,
) {
  return (
    <input
      className={`common-input ${className}`}
      type={type}
      accept={accept}
      name={name}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    />
  );
}

export default forwardRef(Input);
