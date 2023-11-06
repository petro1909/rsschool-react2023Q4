import { useLocation } from 'react-router-dom';
import { getValueByKeyFromLocalStorage } from '@service/storageService';
import { ApiService } from '@service/apiService';
import { TVShowResults } from '@app_types/api/apiResults';

export function useTVShowSearch() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const getApiCall = async () => {
    const searchTerm = getValueByKeyFromLocalStorage() ?? '';
    const pageStr = Number(queryParams.get('page'));
    const page = !isNaN(pageStr) && pageStr > 0 ? pageStr : 1;
    const pageSizeStr = Number(queryParams.get('pageSize'));
    const pageSize = !isNaN(pageSizeStr) && pageSizeStr > 0 ? pageSizeStr : 10;

    const showsCount = await ApiService.getShowsCount(searchTerm);
    const searchedShows = await ApiService.getShows(searchTerm, page, pageSize!);
    const apiResult: TVShowResults = {
      items: searchedShows,
      config: {
        totalCount: showsCount,
        currentPage: page,
        pageSize: pageSize,
      },
    };
    return apiResult;
  };
  return getApiCall;
}
