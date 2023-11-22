import { ChangeEvent } from 'react';
import classNames from './customForm.module.css';

export type CustomFormProps = {
  inputProps: {
    type: 'text' | 'number';
    placeholder?: string;
    value: string | number;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
    additionalClasses?: string[];
  };
  submitProps: {
    submitFn: () => void;
    additionalClasses?: string[];
  };
  children?: React.ReactNode;
};

export function CustomForm({ inputProps, submitProps, children }: CustomFormProps) {
  const inputClassNames = [];
  inputClassNames.push(classNames.searchInput);

  if (inputProps.additionalClasses) {
    inputClassNames.push(...inputProps.additionalClasses);
  }
  return (
    <section className={classNames.search}>
      <input
        className={inputClassNames.join(' ')}
        type={inputProps.type}
        placeholder={inputProps.placeholder}
        value={inputProps.value}
        onChange={inputProps.change}
        data-testid={'input'}
      />
      <button
        data-testid={'submit'}
        className={classNames.searchSubmit}
        onClick={submitProps.submitFn}
      >
        {children}
      </button>
    </section>
  );
}
