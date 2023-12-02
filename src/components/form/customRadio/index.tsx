import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import React from 'react';
import { InputWrapper } from '../customInputWrapper';

type CusomRadioInputProps = {
  name: string;
  id: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomRadioInput = React.forwardRef<HTMLInputElement, CusomRadioInputProps>(
  ({ name, id, label, error, ...rest }: CusomRadioInputProps, ref) => {
    return (
      <InputWrapper id={id} label={label} error={error} className={classNames.radioWrapper}>
        <input type="radio" id={id} name={name} value={id} ref={ref} {...rest} />
      </InputWrapper>
    );
  }
);
