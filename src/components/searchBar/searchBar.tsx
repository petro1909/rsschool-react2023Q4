import React, { useEffect, useState } from 'react';
import '../app/app';
import searchIcon from '../../assets/search.svg';
import classNames from './searchBar.module.css';
import {
  getValueByKeyFromLocalStorage,
  setValueByKeyToLocalStorage,
} from '../../service/storageService';
import { SearchBarProps } from './searchBarProps';

export function SearchBar(props: SearchBarProps) {
  const [text, setText] = useState('');

  const search = async () => {
    setValueByKeyToLocalStorage(text);
    await props.searchItemFn(text);
  };

  useEffect(() => {
    const currentSearchTerm = getValueByKeyFromLocalStorage();
    setText(currentSearchTerm);
    props.searchItemFn(currentSearchTerm);
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
        ></input>
        <button
          className={classNames.searchSubmit}
          onClick={async () => await search()}
        >
          <img className={classNames.searchImage} src={searchIcon}></img>
        </button>
      </div>
    </section>
  );
}
