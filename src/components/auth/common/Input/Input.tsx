/* eslint-disable react/no-unused-prop-types */
import { forwardRef } from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  name?: string;
  className?: string;
  id?: string;
  accept?: string;
  onChange?: any;
  onClick?: any;
  disabled?: boolean;
  placeholder?: string;
  step?: number;
  onBlur?: any;
  min?: number;
  isRequired?: boolean;
  cy?: string;
}

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
    isRequired,
    cy,
  }: InputProps,
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
      required={isRequired}
      data-cy={cy}
    />
  );
}

export default forwardRef(Input);
