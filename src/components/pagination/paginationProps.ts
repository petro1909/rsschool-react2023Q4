import { SearchFnProps } from '../../types/searchFunctionProps';

export type PaginationProps = SearchFnProps & { pagesCount: number; currentPage: number };
