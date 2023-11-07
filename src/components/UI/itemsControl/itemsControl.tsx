import { Pagination } from './pagination/pagination';
import classNames from './itemsControl.module.css';
import { TotalCount } from './totalCount/totalCount';
import { PageSizeForm } from './pageSizeForm/pageSizeForm';
import { TVShowResultsConfig } from '@app_types/api/apiResults';

export type ItemsControlProps = {
  resultsConfig: TVShowResultsConfig;
};

export function ItemsControl({ resultsConfig }: ItemsControlProps) {
  return (
    <section className={classNames.itemsControl}>
      <TotalCount count={resultsConfig.totalCount} />
      <PageSizeForm pageSize={resultsConfig.pageSize} />
      <Pagination resultsConfig={resultsConfig} />
    </section>
  );
}
