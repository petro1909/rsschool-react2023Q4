import { FieldError } from 'react-hook-form';
import { forwardRef, useState } from 'react';
import { InputWrapper } from '../customInputWrapper';
import { passwordSchema } from '@validation/formValidator';
import { ValidationError } from 'yup';

type TextInputProps = {
  id: string;
  placeholder?: string;
  label: string;
  error?: FieldError | ValidationError | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomPasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, placeholder, label, error, onChange, ...rest }: TextInputProps, ref) => {
    const [passwordStrength, setPasswordStrength] = useState<ValidationError | undefined>();
    const checkPasswordStrendgth = async (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      try {
        passwordSchema.validateSync(e.target.value);
      } catch (error) {
        if (error instanceof ValidationError) {
          setPasswordStrength(error);
        }
      }
    };

    return (
      <div>
        <InputWrapper id={id} label={label} error={error || passwordStrength}>
          <input type="password" id={id} placeholder={placeholder} ref={ref} {...rest} onChange={checkPasswordStrendgth} />
        </InputWrapper>
      </div>
    );
  }
);
