import { Pagination } from './pagination/pagination';
import classNames from './itemsControl.module.css';
import { ItemsControlProps } from './itemsControlProps';
import { TotalCount } from './totalCount/totalCount';
import { PageSizeForm } from './pageSizeForm/pageSizeForm';

export function ItemsControl(props: ItemsControlProps) {
  return (
    <section className={classNames.itemsControl}>
      <TotalCount count={props.resultsConfig.totalCount} />
      <PageSizeForm pageSize={props.resultsConfig.pageSize} />
      <Pagination resultsConfig={props.resultsConfig} />
    </section>
  );
}
