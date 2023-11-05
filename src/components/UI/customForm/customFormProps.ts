import { ChangeEvent } from 'react';

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
