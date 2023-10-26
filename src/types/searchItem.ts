export type SearchItem = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
};
export type SearchItems = {
  items: Array<SearchItem>;
  count: number;
};
export type SearchItemJsonResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<SearchItem>;
};
