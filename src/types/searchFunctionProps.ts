export type SearchFnProps = {
  searchFn: (text: string, page?: number) => Promise<void>;
};
