import { Pagination } from './pagination/pagination';
import classNames from './itemsControl.module.css';
import { TotalCount } from './totalCount/totalCount';
import { PageSizeForm } from './pageSizeForm/pageSizeForm';
import { TVShowResultsConfig } from '@app_types/api/apiResults';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setPageSize } from '../../../store/tvShowsSlice';
import { RootState } from '../../../store/store';
import { useGetShowsCountQuery } from '../../../store/tvShowsApi';
import { useSearchParams } from 'react-router-dom';

export type ItemsControlProps = {
  resultsConfig: TVShowResultsConfig;
};

export function ItemsControl() {
  const state = useSelector((state: RootState) => state.tvShows);
  const dispatch = useDispatch();
  const [, setQueryParams] = useSearchParams();
  const totalCount = useGetShowsCountQuery(state.searchTerm).data ?? 0;

  const updatePage = (page: number) => {
    setQueryParams((params) => {
      params.set('page', `${page}`);
      return params;
    });
    dispatch(setCurrentPage(page));
  };
  const updatePageSize = (pageSize: number) => {
    setQueryParams((params) => {
      params.set('page', `${1}`);
      params.set('pageSize', `${pageSize}`);
      return params;
    });
    dispatch(setPageSize(pageSize));
  };

  return (
    <section className={classNames.itemsControl}>
      <TotalCount count={totalCount!} />
      <PageSizeForm pageSize={state.pageSize} submit={updatePageSize} />
      <Pagination
        resultsConfig={{
          totalCount: totalCount,
          currentPage: state.page,
          pageSize: state.pageSize,
        }}
        submit={updatePage}
      />
    </section>
  );
}
