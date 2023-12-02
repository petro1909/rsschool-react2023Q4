import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import { forwardRef } from 'react';

type TextInputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'radio' | 'checkbox' | 'file';
  id: string;
  placeholder?: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomInput = forwardRef<HTMLInputElement, TextInputProps>(({ type, id, placeholder, label, error, ...rest }: TextInputProps, ref) => {
  return (
    <div className={classNames.customTextInputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} ref={ref} {...rest} />
      <div className={classNames.error}> {error && <span>{error.message}</span>}</div>
    </div>
  );
});
