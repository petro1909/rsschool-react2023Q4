export type SearchItem = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
};
export type ApiResult = {
  totalCount: number;
  next: string | null;
  previous: string | null;
  items: Array<SearchItem>;
};

export type ApiRawResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<SearchItem>;
};
