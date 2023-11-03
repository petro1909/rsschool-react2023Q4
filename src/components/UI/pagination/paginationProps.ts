import { TVShowResultsConfig } from '../../../types/api/apiResults';
import { SearchFnProps } from '../../../types/searchFunctionProps';

export type PaginationProps = SearchFnProps & {
  resultsConfig: TVShowResultsConfig;
};
