import { TVShowResultsConfig } from '../../../types/api/apiResults';
import { SearchFnProps } from '../../../types/searchFunctionProps';

export type ItemsControlProps = SearchFnProps & {
  resultsConfig: TVShowResultsConfig;
};
