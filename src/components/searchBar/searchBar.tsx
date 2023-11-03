import React, { useEffect, useState } from 'react';
import '../app/app';
import searchIcon from '../../assets/search.svg';
import classNames from './searchBar.module.css';
import {
  getValueByKeyFromLocalStorage,
  setValueByKeyToLocalStorage,
} from '../../service/storageService';
import { SearchFnProps } from '../../types/searchFunctionProps';

export const SearchBar = React.memo(function SearchBar(props: SearchFnProps) {
  const [text, setText] = useState('');

  const search = async () => {
    setValueByKeyToLocalStorage(text);
    await props.searchFn();
  };
  useEffect(() => {
    const currentSearchTerm = getValueByKeyFromLocalStorage();
    setText(currentSearchTerm);
    props.searchFn();
  }, []);

  return (
    <section className={classNames.searchWrapper}>
      <div className={classNames.search}>
        <input
          className={classNames.searchInput}
          type="text"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={classNames.searchSubmit} onClick={async () => await search()}>
          <img className={classNames.searchImage} src={searchIcon}></img>
        </button>
      </div>
    </section>
  );
});
