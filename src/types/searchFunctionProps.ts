export type SearchFnProps = {
  searchFn: (page?: number, pageSize?: number) => Promise<void>;
};
