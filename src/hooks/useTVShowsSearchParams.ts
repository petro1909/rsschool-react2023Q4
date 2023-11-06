import { useSearchParams } from 'react-router-dom';
import { setValueByKeyToLocalStorage } from '@service/storageService';
import { TVShowsSearchProps } from '@app_types/tvshowSearchProps';

export function useTVShowsSearchParams() {
  const setQeryParams = useSearchParams()[1];

  const setParams = (props: TVShowsSearchProps) => {
    const searchTerm = props.searchTerm;
    const page = props.page;
    const pageSize = props.pageSize;

    setQeryParams((params) => {
      params.set('page', `${page}`);
      params.set('pageSize', `${pageSize}`);
      return params;
    });
    setValueByKeyToLocalStorage(searchTerm!);
  };
  return setParams;
}
