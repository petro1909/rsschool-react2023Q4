import { PaginationProps } from './paginationProps';
import classNames from './pagination.module.css';
import { getPageArray, getPagesCount } from '../../../utils/page';
import { useEffect, useState } from 'react';

export function Pagination(props: PaginationProps) {
  const [pagesCount, setPagesCount] = useState(0);

  const search = async (page: number) => {
    await props.searchFn(page, props.resultsConfig.pageSize);
  };
  const setCurrentPageStyle = (disabledCondition: number, pageNumber?: number) => {
    const disabled = props.resultsConfig.currentPage === disabledCondition ? true : false;
    const classes = [];
    classes.push(classNames.page);
    if (disabled) {
      classes.push(classNames.pageDisabled);
    }
    if (pageNumber === props.resultsConfig.currentPage) {
      classes.push(classNames.pageCurrent);
    }
    return { disabled: disabled, className: classes.join(' ') };
  };

  useEffect(() => {
    setPagesCount(getPagesCount(props.resultsConfig.totalCount, props.resultsConfig.pageSize));
  }, []);

  return (
    <section className={classNames.pages}>
      <button
        {...setCurrentPageStyle(1)}
        onClick={async () => await search(props.resultsConfig.currentPage - 1)}
      >
        &#x2BC7;
      </button>
      {getPageArray(pagesCount).map((pageNumber) => (
        <button
          {...setCurrentPageStyle(pageNumber, pageNumber)}
          key={pageNumber}
          onClick={async () => await search(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        {...setCurrentPageStyle(pagesCount)}
        onClick={async () => await search(props.resultsConfig.currentPage + 1)}
      >
        &#x2BC8;
      </button>
    </section>
  );
}
