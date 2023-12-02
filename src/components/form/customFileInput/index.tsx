import { FieldError } from 'react-hook-form';
import classNames from './index.module.css';
import { forwardRef, useState } from 'react';
import { InputWrapper } from '../customInputWrapper';

type TextInputProps = {
  id: string;
  label: string;
  error?: FieldError | undefined;
};

export const CustomFileInput = forwardRef<HTMLInputElement, TextInputProps>(({ id, label, error, ...rest }: TextInputProps, ref) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const displayImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    } else {
      setImageSrc('');
    }
  };

  return (
    <section>
      <section className={classNames.imageWrapper}>
        <img src={imageSrc} alt="loaded image" className={!imageSrc ? classNames.hide : ''} />
      </section>
      <InputWrapper id={id} label={label} error={error}>
        <input type="file" id={id} ref={ref} {...rest} onChange={displayImage} />
      </InputWrapper>
    </section>
  );
});
