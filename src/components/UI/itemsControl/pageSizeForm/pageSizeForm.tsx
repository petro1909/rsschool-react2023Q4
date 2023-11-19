import { useState } from 'react';
import { CustomForm } from '@components/UI/customForm/customForm';
import classNames from './pageSizeForm.module.css';

export type PageSizeFormProps = {
  pageSize: number;
  submit: (pageSize: number) => void;
};

export function PageSizeForm(props: PageSizeFormProps) {
  const [pageSize, setPageSize] = useState(props.pageSize);

  return (
    <section className={classNames.pageSizeWrapper}>
      <span>Page size:</span>
      <CustomForm
        inputProps={{
          type: 'number',
          placeholder: 'page size',
          value: pageSize,
          change: (e) => setPageSize(+e.target.value),
          additionalClasses: [classNames.numberInput],
        }}
        submitProps={{
          submitFn: () => props.submit(pageSize),
        }}
      >
        SET
      </CustomForm>
    </section>
  );
}
