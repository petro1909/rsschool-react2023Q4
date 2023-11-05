export type GetShowsCountRequest = {
  jsonrpc: string;
  method: string;
  params: GetShowsCountRequestParameters;
  id: number;
};
export type GetShowsCountRequestParameters = {
  search: {
    query: string;
  };
};
export type GetShowsCountResponse = {
  jsonrpc: string;
  result: number;
  id: number;
};
