import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import React from 'react';

type CusomRadioInputProps = {
  name: string;
  id: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomRadioInput = React.forwardRef<HTMLInputElement, CusomRadioInputProps>(function CustomRadioInput(
  { name, id, label, error, ...rest }: CusomRadioInputProps,
  ref
) {
  return (
    <section className={classNames.radio}>
      <label htmlFor={id}>{label}</label>
      <input type="radio" id={id} name={name} value={id} ref={ref} {...rest} />
      {error && <span>{error.message}</span>}
    </section>
  );
});
