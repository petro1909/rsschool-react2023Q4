import { Pagination } from './pagination/pagination';
import classNames from './itemsControl.module.css';
import { TotalCount } from './totalCount/totalCount';
import { PageSizeForm } from './pageSizeForm/pageSizeForm';
import { useRouter } from 'next/router';
import { useGetShowsCountQuery } from '../../../redux/tvShowsApi';
import { getTVshowsQueryParams } from '@service/queryParamsService';

export function ItemsControl() {
  const router = useRouter();
  const { searchQuery, page, pageSize } = getTVshowsQueryParams(router.query);

  const { data = 0 } = useGetShowsCountQuery(searchQuery);

  const updatePage = (page: number) => {
    router.push({ query: { ...router.query, page } });
  };
  const updatePageSize = (pageSize: number) => {
    router.push({ query: { ...router.query, pageSize, page: 1 } });
  };
  return (
    <section className={classNames.itemsControl}>
      <TotalCount count={data} />
      <PageSizeForm pageSize={pageSize} submit={updatePageSize} />
      <Pagination
        resultsConfig={{
          totalCount: data,
          currentPage: page,
          pageSize: pageSize,
        }}
        submit={updatePage}
      />
    </section>
  );
}
