import { PaginationProps } from './paginationProps';
import { getValueByKeyFromLocalStorage } from '../../service/storageService';
import classNames from './pagination.module.css';
import { getPageArray } from '../../utils/page';

export function Pagination(props: PaginationProps) {
  const search = async (page: number) => {
    const currentSearchTerm = getValueByKeyFromLocalStorage();
    await props.searchFn(currentSearchTerm, page);
  };
  const setCurrentPageStyle = (disabledCondition: number, pageNumber?: number) => {
    const disabled = props.currentPage === disabledCondition ? true : false;
    const classes = [];
    classes.push(classNames.page);
    if (disabled) {
      classes.push(classNames.pageDisabled);
    }
    if (pageNumber === props.currentPage) {
      classes.push(classNames.pageCurrent);
    }
    return { disabled: disabled, className: classes.join(' ') };
  };
  return (
    <section className={classNames.pages}>
      <button {...setCurrentPageStyle(1)} onClick={async () => await search(props.currentPage - 1)}>
        &#x2BC7;
      </button>
      {getPageArray(props.pagesCount).map((pageNumber) => (
        <button
          {...setCurrentPageStyle(pageNumber, pageNumber)}
          key={pageNumber}
          onClick={async () => await search(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        {...setCurrentPageStyle(props.pagesCount)}
        onClick={async () => await search(props.currentPage + 1)}
      >
        &#x2BC8;
      </button>
    </section>
  );
}
