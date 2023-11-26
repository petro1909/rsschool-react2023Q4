import { Pagination } from './pagination/pagination';
import classNames from './itemsControl.module.css';
import { TotalCount } from './totalCount/totalCount';
import { PageSizeForm } from './pageSizeForm/pageSizeForm';
import { useRouter } from 'next/router';
import { useGetShowsCountQuery } from '../../../redux/tvShowsApi';

export function ItemsControl() {
  const router = useRouter();
  const { query } = router;
  const searchQuery = query.searchQuery ? (query.searchQuery as string) : '';
  const page = !isNaN(Number(query.page)) ? Number(query.page) : 1;
  const pageSize = !isNaN(Number(query.pageSize)) ? Number(query.pageSize) : 10;

  const { data = 0 } = useGetShowsCountQuery(searchQuery, { skip: router.isFallback });

  const updatePage = (page: number) => {
    router.push({ query: { ...router.query, page } });
  };
  const updatePageSize = (pageSize: number) => {
    router.push({ query: { ...router.query, pageSize } });
  };
  return (
    <section className={classNames.itemsControl}>
      <TotalCount count={data} />
      <PageSizeForm pageSize={+pageSize} submit={updatePageSize} />
      <Pagination
        resultsConfig={{
          totalCount: data,
          currentPage: +page,
          pageSize: +pageSize,
        }}
        submit={updatePage}
      />
    </section>
  );
}
