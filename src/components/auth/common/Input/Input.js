/* eslint-disable react/destructuring-assignment */
import { forwardRef } from 'react';
import './Input.scss';

function Input(
  {
    className,
    type,
    name,
    accept,
    onChange,
    onClick,
    disabled,
    placeholder,
    step,
    onBlur,
    min,
    cy,
  },
  ref,
) {
  return (
    <input
      className={`common-input ${className}`}
      type={type}
      accept={accept}
      name={name}
      step={step}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      placeholder={placeholder}
      onBlur={onBlur}
      min={min}
      data-cy={cy}
      required
    />
  );
}

export default forwardRef(Input);
