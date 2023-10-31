import React from 'react';
import { SearchBar } from '../searchBar/searchBar';
import { Cards } from '../../components/cards/cards';
import getFetchJson from '../../service/fetchService';
import { ApiResult } from '../../types/searchItem';
import { ErrorButton } from '../error/errorButton/errorButton';
import classNames from './app.module.css';
import { getPagesCount } from '../../utils/page';
import { Loader } from '../loader/loader';
import { Pagination } from '../pagination/pagination';

export default function App() {
  const [apiResult, setApiResult] = React.useState<ApiResult>({
    totalCount: 0,
    next: null,
    previous: null,
    items: [],
  });
  const [loaded, setLoaded] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pagesCount, setPagesCount] = React.useState(0);

  const search = React.useCallback(async (searchTerm: string, page?: number) => {
    setLoaded(false);
    const searchPage = page && page > 0 ? page : 1;
    const fetchedItems = await getFetchJson(searchTerm, searchPage);
    if (fetchedItems) {
      setApiResult({
        totalCount: fetchedItems.count,
        next: fetchedItems.next,
        previous: fetchedItems.previous,
        items: fetchedItems.results,
      });
      setPagesCount(getPagesCount(fetchedItems.count, 10));
    }
    setLoaded(true);
    setCurrentPage(searchPage);
  }, []);

  return (
    <>
      <header className={classNames.header}>
        <SearchBar searchFn={search} />
        <ErrorButton />
      </header>
      <main>
        <h1 className={classNames.title}>Star wars api search results</h1>
        {loaded ? (
          <>
            <Cards {...apiResult} />
            <Pagination searchFn={search} pagesCount={pagesCount} currentPage={currentPage} />
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
