import { ApiBaseRequest } from '@app_types/api/apiBaseRequest';
import { GetShowByIdRequestParams } from '@app_types//api/getShowById';
import { GetShowsRequestParams } from '@app_types//api/getShows';
import { GetShowsCountRequestParameters } from '@app_types//api/getShowsCount';

export class ApiService {
  private static baseRequestBody: ApiBaseRequest = { jsonrpc: '2.0', id: 1 };

  public static createGetShowByIdBody(id: number): ApiBaseRequest {
    const params: GetShowByIdRequestParams = { showId: id, withEpisodes: false };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.GetById';
    requestBody.params = params;
    return requestBody;
  }

  public static createGetShowsBody(
    searchTerm: string,
    page: number,
    pageSize: number
  ): ApiBaseRequest {
    --page;
    const params: GetShowsRequestParams = {
      search: { query: searchTerm },
      page: page,
      pageSize: pageSize,
    };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.Get';
    requestBody.params = params;
    return requestBody;
  }

  public static createGetShowsCountBody(searchTerm: string): ApiBaseRequest {
    const params: GetShowsCountRequestParameters = { search: { query: searchTerm } };
    const requestBody = ApiService.baseRequestBody;
    requestBody.method = 'shows.Count';
    requestBody.params = params;
    return requestBody;
  }
}
