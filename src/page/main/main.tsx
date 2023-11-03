import React from 'react';
import { ErrorButton } from '../../components/error/errorButton/errorButton';
import { SearchBar } from '../../components/searchBar/searchBar';
import { Outlet, useSearchParams } from 'react-router-dom';
import classNames from './main.module.css';
import { ApiService } from '../../service/apiService';
import { TVShows } from '../../components/tvShow/tvShows/tvShows';
import { TVShowResults } from '../../types/api/apiResults';
import { getValueByKeyFromLocalStorage } from '../../service/storageService';
import { Loader } from '../../components/UI/loader/loader';

export default function Main() {
  const [searchResult, setSearchResult] = React.useState<Partial<TVShowResults>>({});
  const [loaded, setLoaded] = React.useState(false);
  const setSearchParams = useSearchParams()[1];

  const search = React.useCallback(async (page?: number, pageSize?: number) => {
    setLoaded(false);
    page = page && page > 0 ? page : 1;
    pageSize = pageSize && pageSize >= 0 ? pageSize : 10;

    const searchTerm = getValueByKeyFromLocalStorage();
    const showsCount = await ApiService.getShowsCount(searchTerm);
    const searchedShows = await ApiService.getShows(searchTerm, page, pageSize);
    if (searchedShows) {
      setSearchResult({
        items: searchedShows,
        config: {
          totalCount: showsCount,
          currentPage: page,
          pageSize: pageSize,
        },
      });
    }
    setLoaded(true);
    setSearchParams((params) => {
      params.set('page', `${page}`);
      params.set('pageSize', `${pageSize}`);
      return params;
    });
  }, []);

  return (
    <>
      <header className={classNames.header}>
        <SearchBar searchFn={search} />
        <ErrorButton />
      </header>
      <main>
        <h1 className={classNames.title}>TV shows api search results</h1>
        {loaded ? (
          <TVShows items={searchResult.items!} config={searchResult.config!} searchFn={search} />
        ) : (
          <Loader />
        )}
      </main>
      <Outlet />
    </>
  );
}
