import { FieldError } from 'react-hook-form';
import { CustomRadioInput } from '../customRadio';
import { forwardRef } from 'react';
import classNames from './index.module.css';

type RadioFieldsSet = {
  title: string;
  name: string;
  radios: string[];
  error: FieldError | undefined;
};

export const RadioFieldsSet = forwardRef<HTMLInputElement, RadioFieldsSet>(({ title, name, radios, error, ...rest }: RadioFieldsSet, ref) => {
  return (
    <section className={classNames.fieldsetWrapper}>
      <h4 className={classNames.fieldsetTitle}>{title}</h4>
      <section className={classNames.fieldset}>
        {radios.map((radio) => (
          <CustomRadioInput key={radio} name={name} id={radio} label={radio} ref={ref} {...rest} />
        ))}
      </section>
      {error && <span>{error.message}</span>}
    </section>
  );
});
