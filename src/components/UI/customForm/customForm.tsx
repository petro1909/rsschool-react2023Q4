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
      />
      <button
        className={classNames.searchSubmit}
        onClick={async () => await submitProps.submitFn()}
      >
        {children}
      </button>
    </section>
  );
}
