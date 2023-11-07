import { useLocation } from 'react-router';
import { PaginationButton } from './paginationButton/paginationButton';
import { useTVShowsSearchParams } from '@hooks/useTVShowsSearchParams';
import { usePagination } from '@hooks/usePagination';
import { getValueByKeyFromLocalStorage } from '@service/storageService';
import { TVShowResultsConfig } from '@app_types/api/apiResults';
import classNames from './pagination.module.css';

export type PaginationProps = {
  resultsConfig: TVShowResultsConfig;
};

export function Pagination({ resultsConfig }: PaginationProps) {
  const [pageArray, pagesCount] = usePagination(
    resultsConfig.totalCount,
    resultsConfig.currentPage,
    resultsConfig.pageSize
  );
  const updateTVShowsParams = useTVShowsSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = (page: number) => {
    const pageSizeStr = Number(queryParams.get('pageSize'));
    const pageSize = !isNaN(pageSizeStr) ? pageSizeStr : 10;
    const searchTerm = getValueByKeyFromLocalStorage();
    updateTVShowsParams({ searchTerm: searchTerm, page: page, pageSize: pageSize });
  };

  return (
    <section className={classNames.pages}>
      <PaginationButton
        disabled={resultsConfig.currentPage == 1}
        onClick={search}
        pageNumber={resultsConfig.currentPage - 1}
        key={'prev'}
      >
        &#x2BC7;
      </PaginationButton>
      {pageArray.map((page, index) =>
        page == 0 ? (
          <span key={index + 0.5} className={classNames.pageDots}>
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            disabled={resultsConfig.currentPage == page}
            onClick={search}
            pageNumber={page}
            current={resultsConfig.currentPage == page}
          >
            {page}
          </PaginationButton>
        )
      )}
      <PaginationButton
        disabled={resultsConfig.currentPage == pagesCount}
        onClick={search}
        pageNumber={resultsConfig.currentPage + 1}
        key={'next'}
      >
        &#x2BC8;
      </PaginationButton>
    </section>
  );
}
