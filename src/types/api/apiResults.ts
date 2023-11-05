import { TVShow } from './tvShow';

export type TVShowResults = {
  items: Array<TVShow>;
  config: TVShowResultsConfig;
};

export type TVShowResultsConfig = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
};
