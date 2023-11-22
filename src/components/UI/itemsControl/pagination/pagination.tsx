import { PaginationButton } from './paginationButton/paginationButton';
import { usePagination } from '@hooks/usePagination';
import { TVShowResultsConfig } from '@app_types/api/apiResults';
import classNames from './pagination.module.css';

export type PaginationProps = {
  resultsConfig: TVShowResultsConfig;
  submit: (pageNumber: number) => void;
};

export function Pagination({ resultsConfig, submit }: PaginationProps) {
  const [pageArray, pagesCount] = usePagination(resultsConfig);

  return (
    <section className={classNames.pages}>
      <PaginationButton
        disabled={resultsConfig.currentPage === 1}
        onClick={submit}
        pageNumber={resultsConfig.currentPage - 1}
        key="prev"
      >
        &#x2BC7;
      </PaginationButton>
      {pageArray.map((page, index) =>
        page === 0 ? (
          <span key={index + 0.5} className={classNames.pageDots}>
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            disabled={resultsConfig.currentPage === page}
            onClick={submit}
            pageNumber={page}
            current={resultsConfig.currentPage === page}
          >
            {page}
          </PaginationButton>
        )
      )}
      <PaginationButton
        disabled={resultsConfig.currentPage === pagesCount}
        onClick={submit}
        pageNumber={resultsConfig.currentPage + 1}
        key="next"
      >
        &#x2BC8;
      </PaginationButton>
    </section>
  );
}
