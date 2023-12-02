import { FieldError } from 'react-hook-form';
import { CustomRadioInput } from '../customRadio';
import { forwardRef } from 'react';
import classNames from './index.module.css';
import { InputWrapper } from '../customInputWrapper';

type RadioFieldsSet = {
  title: string;
  name: string;
  radios: string[];
  error: FieldError | undefined;
};

export const RadioFieldsSet = forwardRef<HTMLInputElement, RadioFieldsSet>(({ title, name, radios, error, ...rest }: RadioFieldsSet, ref) => {
  return (
    <section>
      <InputWrapper id={title} label={title} error={error}>
        <section className={classNames.fieldset}>
          {radios.map((radio) => (
            <CustomRadioInput key={radio} name={name} id={radio} label={radio} ref={ref} {...rest} />
          ))}
        </section>
      </InputWrapper>
    </section>
  );
});
