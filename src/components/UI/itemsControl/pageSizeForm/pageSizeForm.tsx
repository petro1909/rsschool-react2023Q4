import { useState, ChangeEvent, useEffect } from 'react';
import { CustomForm } from '../../customForm/customForm';
import classNames from './pageSizeForm.module.css';
import { useTVShowsSearchParams } from '../../../../hooks/useTVShowsSearchParams';
import { PageSizeFormProps } from './pageSizeFormProps';
import { getValueByKeyFromLocalStorage } from '../../../../service/storageService';

export function PageSizeForm(props: PageSizeFormProps) {
  const [pageSize, setPageSize] = useState(0);
  const updateTVShowsParams = useTVShowsSearchParams();

  useEffect(() => {
    setPageSize(props.pageSize);
  }, []);
  const setPageItemsCount = () => {
    const searchTerm = getValueByKeyFromLocalStorage();
    updateTVShowsParams({ pageSize: pageSize, page: 1, searchTerm: searchTerm });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageSize(+e.target.value);
  };

  return (
    <section className={classNames.pageSizeWrapper}>
      <span>Page size:</span>
      <CustomForm
        inputProps={{
          type: 'number',
          placeholder: 'page size',
          value: pageSize,
          change: handleInputChange,
          additionalClasses: [classNames.numberInput],
        }}
        submitProps={{
          submitFn: setPageItemsCount,
        }}
      >
        SET
      </CustomForm>
    </section>
  );
}
