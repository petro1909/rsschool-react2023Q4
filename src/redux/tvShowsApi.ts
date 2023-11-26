import { GetShowByIdResponse } from '@app_types/api/getShowById';
import { GetShowsResponse } from '@app_types/api/getShows';
import { GetShowsCountResponse } from '@app_types/api/getShowsCount';
import { ExtendedTVShov, TVShow } from '@app_types/api/tvShow';
import { TVShowsSearchProps } from '@app_types/tvshowSearchProps';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiService } from '@service/apiService';
import { HYDRATE } from 'next-redux-wrapper';

export const tvShowsApi = createApi({
  reducerPath: 'tvShowsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.myshows.me/v2/rpc/',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getShows: build.query<TVShow[], TVShowsSearchProps>({
      query: ({ searchTerm, page, pageSize }) => ({
        url: `/`,
        method: 'POST',
        body: ApiService.createGetShowsBody(searchTerm, page, pageSize),
      }),
      transformResponse: (response: GetShowsResponse) => response.result,
    }),
    getShowsCount: build.query<number, string>({
      query: (searchTerm) => ({
        url: '/',
        method: 'POST',
        body: ApiService.createGetShowsCountBody(searchTerm),
      }),
      transformResponse: (response: GetShowsCountResponse) => response.result,
    }),
    getShowById: build.query<ExtendedTVShov, number>({
      query: (id) => ({ url: '/', method: 'POST', body: ApiService.createGetShowByIdBody(id) }),
      transformResponse: (response: GetShowByIdResponse) => response.result,
    }),
  }),
});

export const {
  useGetShowsQuery,
  useGetShowsCountQuery,
  useGetShowByIdQuery,
  util: { getRunningQueriesThunk },
} = tvShowsApi;
export const { getShows, getShowsCount, getShowById } = tvShowsApi.endpoints;
