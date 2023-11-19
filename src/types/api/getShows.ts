import { TVShow } from './tvShow';

export type GetShowsRequest = {
  jsonrpc: string;
  method: string;
  params: GetShowsRequestParams;
  id: number;
};
export type GetShowsRequestParams = {
  search: {
    query: string;
  };
  page: number;
  pageSize: number;
};

export type GetShowsResponse = {
  jsonrpc: string;
  result: Array<TVShow>;
  id: number;
};
