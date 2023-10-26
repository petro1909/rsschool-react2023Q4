import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Cards from '../../components/cards/cards';
import getFetchJson from '../../service/fetchService';
import { SearchItemJsonResult } from '../../types/searchItem';
import { AppProps } from './appProps';
import { AppState } from './appState';
import { ErrorButton } from '../error/errorButton/errorButton';
import classNames from './app.module.css';

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [], isLoaded: false, count: 0 };
  }

  render() {
    return (
      <>
        <header className={classNames.header}>
          <SearchBar searchItemFn={this.search.bind(this)} />
          <ErrorButton />
        </header>
        <main>
          <h1 className={classNames.title}>Star wars api search results</h1>
          <Cards
            items={this.state.items}
            isLoaded={this.state.isLoaded}
            count={this.state.count}
          />
        </main>
      </>
    );
  }

  async search(value: string) {
    this.setState({ isLoaded: false });
    let searchString = `https://swapi.dev/api/people/?page=1`;
    if (value !== null && value.trim() !== '') {
      searchString = searchString.concat(`&search=${value}`);
    }
    const fetchedItems = (await getFetchJson(
      searchString
    )) as SearchItemJsonResult | null;
    if (!fetchedItems) {
      this.setState({ items: [], count: 0 });
    } else {
      this.setState({ items: fetchedItems.results, count: fetchedItems.count });
    }
    this.setState({ isLoaded: true });
  }
}
