export type ApiBaseRequest = {
  jsonrpc: string;
  method?: string;
  params?: object;
  id: number;
};
