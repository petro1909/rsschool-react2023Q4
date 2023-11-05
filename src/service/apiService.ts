import { ApiBaseRequest } from '../types/api/apiBaseRequest';
import { GetShowByIdRequestParams, GetShowByIdResponse } from '../types/api/getShowById';
import { GetShowsRequestParams, GetShowsResponse } from '../types/api/getShows';
import { GetShowsCountRequestParameters, GetShowsCountResponse } from '../types/api/getShowsCount';

export class ApiService {
  private static baseURL = 'https://api.myshows.me/v2/rpc/';
  private static baseRequestBody: ApiBaseRequest = { jsonrpc: '2.0', id: 1 };

  public static async getShowById(id: number) {
    const params: GetShowByIdRequestParams = { showId: id, withEpisodes: false };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.GetById';
    requestBody.params = params;
    const response = (await ApiService.getApiResult(
      JSON.stringify(requestBody)
    )) as GetShowByIdResponse;
    return response ? response.result : null;
  }

  public static async getShows(searchTerm: string, page: number, pageSize: number) {
    --page;
    const params: GetShowsRequestParams = {
      search: { query: searchTerm },
      page: page,
      pageSize: pageSize,
    };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.Get';
    requestBody.params = params;
    const response = (await ApiService.getApiResult(
      JSON.stringify(requestBody)
    )) as GetShowsResponse;
    return response ? response.result : [];
  }

  public static async getShowsCount(searchTerm: string): Promise<number> {
    const params: GetShowsCountRequestParameters = { search: { query: searchTerm } };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.Count';
    requestBody.params = params;
    const response = (await ApiService.getApiResult(
      JSON.stringify(requestBody)
    )) as GetShowsCountResponse | null;
    return response ? response.result : 0;
  }

  private static async getApiResult(requestBody: string) {
    let fetchResult;
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Accept', 'application/json');
      const result = await fetch(ApiService.baseURL, {
        method: 'POST',
        headers: myHeaders,
        body: requestBody,
      });
      if (!result || !result.ok) {
        console.error(result);
        return null;
      }
      fetchResult = await result.json();
    } catch (e: unknown) {
      console.error(e);
      return null;
    }
    return fetchResult;
  }
}
