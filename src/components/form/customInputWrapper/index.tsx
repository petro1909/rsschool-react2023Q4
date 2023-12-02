import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';

type InputWrapperProps = {
  id: string;
  label: string;
  error?: FieldError | undefined;
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
      <div className={classNames.error}> {error && <span>{error.message}</span>}</div>
      <hr />
    </div>
  );
};
