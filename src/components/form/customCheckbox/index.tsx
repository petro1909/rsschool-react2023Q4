import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import React from 'react';
import { InputWrapper } from '../customInputWrapper';

type CustomCheckboxInputProps = {
  id: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomCheckboxInput = React.forwardRef<HTMLInputElement, CustomCheckboxInputProps>(
  ({ id, label, error, ...rest }: CustomCheckboxInputProps, ref) => {
    return (
      <InputWrapper id={id} label={label} error={error} className={classNames.checkboxWrapper}>
        <input type="checkbox" id={id} ref={ref} {...rest} />
      </InputWrapper>
    );
  }
);
