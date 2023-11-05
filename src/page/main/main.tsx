import React from 'react';
import { ErrorButton } from '../../components/error/errorButton/errorButton';
import { SearchBar } from '../../components/searchBar/searchBar';
import { Outlet } from 'react-router-dom';
import classNames from './main.module.css';
import { TVShows } from '../../components/tvShow/tvShows/tvShows';

export default function Main() {
  return (
    <>
      <header className={classNames.header}>
        <SearchBar />
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
