import { ParsedUrlQuery } from 'querystring';

export const getTVshowsQueryParams = (query: ParsedUrlQuery) => {
  const searchQuery = query.searchQuery ? (query.searchQuery as string) : '';
  const page = !isNaN(Number(query.page)) ? Number(query.page) : 1;
  const pageSize = !isNaN(Number(query.pageSize)) ? Number(query.pageSize) : 10;
  const detailedId = Number(query.detailedId);
  return { searchQuery, page, pageSize, detailedId };
};
