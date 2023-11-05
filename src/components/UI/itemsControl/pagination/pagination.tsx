import { PaginationProps } from './paginationProps';
import classNames from './pagination.module.css';
import { PaginationButton } from './paginationButton/paginationButton';
import { useTVShowsSearchParams } from '../../../../hooks/useTVShowsSearchParams';
import { usePagination } from '../../../../hooks/usePagination';
import { getValueByKeyFromLocalStorage } from '../../../../service/storageService';
import { useLocation } from 'react-router';

export function Pagination(props: PaginationProps) {
  const [pageArray, pagesCount] = usePagination(
    props.resultsConfig.totalCount,
    props.resultsConfig.currentPage,
    props.resultsConfig.pageSize
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
        disabled={props.resultsConfig.currentPage == 1}
        onClick={search}
        pageNumber={props.resultsConfig.currentPage - 1}
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
            disabled={props.resultsConfig.currentPage == page}
            onClick={search}
            pageNumber={page}
            current={props.resultsConfig.currentPage == page}
          >
            {page}
          </PaginationButton>
        )
      )}
      <PaginationButton
        disabled={props.resultsConfig.currentPage == pagesCount}
        onClick={search}
        pageNumber={props.resultsConfig.currentPage + 1}
        key={'next'}
      >
        &#x2BC8;
      </PaginationButton>
    </section>
  );
}
