import { ExtendedTVShov } from './tvShow';

export type GetShowByIdRequest = {
  jsonrpc: string;
  method: string;
  params: GetShowByIdRequestParams;
  id: number;
};

export type GetShowByIdRequestParams = {
  showId: number;
  withEpisodes: boolean;
};

export type GetShowByIdResponse = {
  jsonrpc: string;
  result: ExtendedTVShov;
  id: number;
};
