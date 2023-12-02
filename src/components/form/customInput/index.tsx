import { FieldError } from 'react-hook-form';
import { forwardRef } from 'react';
import { InputWrapper } from '../customInputWrapper';

type TextInputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'radio' | 'checkbox' | 'file';
  id: string;
  placeholder?: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomInput = forwardRef<HTMLInputElement, TextInputProps>(({ type, id, placeholder, label, error, ...rest }: TextInputProps, ref) => {
  return (
    <div>
      <InputWrapper id={id} label={label} error={error}>
        <input type={type} id={id} placeholder={placeholder} ref={ref} {...rest} />
      </InputWrapper>
    </div>
  );
});
