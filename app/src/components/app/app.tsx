import React from 'react';

import './App.css';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../cards/Cards';
import getFetchJson from '../../service/fetchService';
import { SearchItemJsonResult } from '../../types/searchItem';
import { AppProps } from './appProps';
import { AppState } from './appState';

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div>
        <header>
          <SearchBar searchItemFn={this.search.bind(this)} />
        </header>
        <main>
          <Cards items={this.state.items} />
        </main>
      </div>
    );
  }

  async search(value: string) {
    const fetchedItems = (await getFetchJson(
      `https://swapi.dev/api/people/?page=1&search=${value}`
    )) as SearchItemJsonResult | null;
    if (!fetchedItems) {
      this.setState({ items: [] });
    } else {
      this.setState({ items: fetchedItems.results });
    }
  }
}
