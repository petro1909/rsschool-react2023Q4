import { FieldError } from 'react-hook-form';
import { forwardRef, useState } from 'react';
import { InputWrapper } from '../customInputWrapper';
import { passwordSchema } from '@validation/formValidator';
import { ValidationError } from 'yup';
import { PasswordStrengthLevel } from '@app_types/passwordStrengthLevel';

type TextInputProps = {
  id: string;
  placeholder?: string;
  label: string;
  error?: FieldError | ValidationError | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const passwordStrengthLevels: PasswordStrengthLevel[] = [
  { message: 'Very weak', color: 'red' },
  { message: 'Weak', color: 'orange' },
  { message: 'Medium', color: 'yellow' },
  { message: 'Strong', color: 'green' },
];

export const CustomPasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, placeholder, label, error, onChange, ...rest }: TextInputProps, ref) => {
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrengthLevel | undefined>();
    const checkPasswordStrendgth = async (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      if (!error) {
        try {
          passwordSchema.validateSync(e.target.value, { abortEarly: false });
          setPasswordStrength(passwordStrengthLevels[passwordStrengthLevels.length - 1]);
        } catch (error) {
          if (error instanceof ValidationError) {
            setPasswordStrength(passwordStrengthLevels[passwordStrengthLevels.length - error.inner.length - 1]);
          }
        }
      }
    };

    return (
      <div>
        <InputWrapper id={id} label={label} error={error || passwordStrength}>
          <input type="password" id={id} placeholder={placeholder} ref={ref} {...rest} onChange={checkPasswordStrendgth} autoComplete="nope" />
        </InputWrapper>
      </div>
    );
  }
);
