import React from 'react';
import { SearchBar } from '../searchBar/searchBar';
import { Cards } from '../../components/cards/cards';
import getFetchJson from '../../service/fetchService';
import { ApiResult } from '../../types/searchItem';
import { ErrorButton } from '../error/errorButton/errorButton';
import classNames from './app.module.css';

export default function App() {
  const [apiResult, setApiResult] = React.useState<ApiResult>({
    totalCount: 0,
    next: null,
    previous: null,
    items: [],
  });
  const [loaded, setLoaded] = React.useState(false);

  const search = React.useCallback(async (searchTerm: string) => {
    setLoaded(false);
    const fetchedItems = await getFetchJson(searchTerm);
    if (fetchedItems) {
      setApiResult({
        totalCount: fetchedItems.count,
        next: fetchedItems.next,
        previous: fetchedItems.previous,
        items: fetchedItems.results,
      });
    }
    setLoaded(true);
  }, []);

  return (
    <>
      <header className={classNames.header}>
        <SearchBar searchItemFn={search} />
        <ErrorButton />
      </header>
      <main>
        <h1 className={classNames.title}>Star wars api search results</h1>
        <Cards isLoaded={loaded} {...apiResult} />
      </main>
    </>
  );
}
