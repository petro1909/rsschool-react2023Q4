import { FormEvent, useState } from 'react';
import classNames from './pageSizeForm.module.css';

export type PageSizeFormProps = {
  pageSize: number;
  submit: (pageSize: number) => void;
};

export function PageSizeForm({ pageSize, submit }: PageSizeFormProps) {
  const [size, setSize] = useState(pageSize);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(size);
  };
  return (
    <section className={classNames.pageSizeWrapper}>
      <span>Page size:</span>
      <form onSubmit={handleSubmit}>
        <input
          className={classNames.numberInput}
          type="number"
          placeholder="page size"
          value={size}
          onChange={(e) => setSize(+e.target.value)}
        />
        <button type="submit">SET</button>
      </form>
    </section>
  );
}
