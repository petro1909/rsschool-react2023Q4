import React from 'react';
import { SearchBar } from '../searchBar/searchBar';
import { Cards } from '../../components/cards/cards';
import getFetchJson from '../../service/fetchService';
import { SearchItemJsonResult, SearchItem } from '../../types/searchItem';
import { ErrorButton } from '../error/errorButton/errorButton';
import classNames from './app.module.css';

export default function App() {
  const [items, setItems] = React.useState<SearchItem[]>([]);
  const [loaded, setLoaded] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const search = async (value: string) => {
    setLoaded(false);
    let searchString = `https://swapi.dev/api/people/?page=1`;
    if (value !== null && value.trim() !== '') {
      searchString = searchString.concat(`&search=${value}`);
    }
    const fetchedItems = (await getFetchJson(
      searchString
    )) as SearchItemJsonResult | null;
    if (!fetchedItems) {
      setItems([]);
      setCount(0);
    } else {
      setItems(fetchedItems.results);
      setCount(fetchedItems.count);
    }
    setLoaded(true);
  };

  return (
    <>
      <header className={classNames.header}>
        <SearchBar searchItemFn={search} />
        <ErrorButton />
      </header>
      <main>
        <h1 className={classNames.title}>Star wars api search results</h1>
        <Cards items={items} isLoaded={loaded} count={count} />
      </main>
    </>
  );
}
