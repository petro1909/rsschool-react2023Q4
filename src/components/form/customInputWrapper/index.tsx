import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import { PasswordStrengthLevel } from '@app_types/passwordStrengthLevel';
import { ValidationError } from 'yup';

type InputWrapperProps = {
  id: string;
  label: string;
  error?: FieldError | ValidationError | undefined | PasswordStrengthLevel;
  children?: React.ReactNode;
  className?: string;
};

export const InputWrapper = ({ id, label, error, children, className }: InputWrapperProps) => {
  return (
    <div className={className ? className : classNames.customTextInputWrapper}>
      <label className={classNames.inputLabel} htmlFor={id}>
        {label}
      </label>
      {children}
      <div style={{ backgroundColor: error ? ('color' in error ? error.color : 'red') : 'white' }} className={classNames.error}>
        {error && <span>{error.message}</span>}
      </div>
      <hr />
    </div>
  );
};
