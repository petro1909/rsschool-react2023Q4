import { Outlet } from 'react-router-dom';
import { ErrorButton } from '@components/error/errorButton/errorButton';
import { SearchBar } from '@components/searchBar/searchBar';
import { TVShows } from '@components/tvShow/tvShows/tvShows';
import classNames from './main.module.css';
import { createContext, useState } from 'react';

export const SearchBarContext = createContext<{
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}>({ setSearchTerm: () => {} });

export default function Main() {
  const [, setSearchTerm] = useState('');
  return (
    <>
      <header className={classNames.header}>
        <SearchBarContext.Provider
          value={{
            setSearchTerm,
          }}
        >
          <SearchBar />
        </SearchBarContext.Provider>

        <ErrorButton />
      </header>
      <main>
        <h1 className={classNames.title}>TV shows api search results</h1>
        <TVShows />
      </main>
      <Outlet />
    </>
  );
}
