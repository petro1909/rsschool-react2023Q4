import { useEffect, useState } from 'react';
import { Pagination } from '../pagination/pagination';
import classNames from './itemsControl.module.css';
import { ItemsControlProps } from './itemsControlProps';

export function ItemsControl(props: ItemsControlProps) {
  const [pageSize, setPageSize] = useState(0);

  const setPageItemsCount = async () => {
    await props.searchFn(1, pageSize);
  };

  useEffect(() => {
    setPageSize(props.resultsConfig.pageSize);
  }, []);

  return (
    <section>
      <p className={classNames.itemsNumberTotal}>Total results: {props.resultsConfig.totalCount}</p>
      <section className={classNames.itemsNumberPage}>
        <span>Results on page:</span>
        <input type="number" value={pageSize} onChange={(e) => setPageSize(+e.target.value)} />
        <button onClick={setPageItemsCount}>Set</button>
      </section>

      <Pagination searchFn={props.searchFn} resultsConfig={props.resultsConfig} />
    </section>
  );
}
