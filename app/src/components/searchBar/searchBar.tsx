import React from 'react';
import '../app/app';
import searchIcon from '../../assets/search.svg';
import './searchBar.css';
import { SearchBarState } from './searchBarState';
import {
  getValueByKeyFromLocalStorage,
  setValueByKeyToLocalStorage,
} from '../../service/storageService';
import { SearchBarProps } from './searchBarProps';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      storageKey: 'searchValue',
      text: '',
    };
  }

  render() {
    return (
      <section className="search-wrapper">
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="search"
            value={this.state.text}
            onChange={(e) => this.onChange(e)}
          ></input>
          <button className="search__submit" onClick={async () => await this.search()}>
            <img className="search__image" src={searchIcon}></img>
          </button>
        </div>
      </section>
    );
  }

  async search() {
    setValueByKeyToLocalStorage(this.state.storageKey, this.state.text);
    await this.props.searchItemFn(this.state.text);
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState({ text: target.value });
  }

  componentDidMount() {
    const currentSearchTerm = getValueByKeyFromLocalStorage(this.state.storageKey);
    this.setState({ text: currentSearchTerm });
    this.props.searchItemFn(currentSearchTerm);
  }
}
