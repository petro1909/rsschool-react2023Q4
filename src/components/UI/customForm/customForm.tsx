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

export function CustomForm(props: CustomFormProps) {
  const inputClassNames = [];
  inputClassNames.push(classNames.searchInput);

  if (props.inputProps.additionalClasses) {
    inputClassNames.push(...props.inputProps.additionalClasses);
  }
  return (
    <section className={classNames.search}>
      <input
        className={inputClassNames.join(' ')}
        type={props.inputProps.type}
        placeholder={props.inputProps.placeholder}
        value={props.inputProps.value}
        onChange={props.inputProps.change}
      />
      <button
        className={classNames.searchSubmit}
        onClick={async () => await props.submitProps.submitFn()}
      >
        {props.children}
      </button>
    </section>
  );
}
