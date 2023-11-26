import { FormEvent, useEffect, useState } from 'react';
import searchIcon from '../../public/search.svg';
import classNames from './searchBar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getValueFromLocalStorage, setValueToLocalStorage } from '@service/storageService';

export const SearchBar = () => {
  const [text, setText] = useState('');
  const router = useRouter();

  useEffect(() => {
    setText(getValueFromLocalStorage());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValueToLocalStorage(text);
    router.push({ query: { ...router.query, searchQuery: text, page: 1 } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        <Image src={searchIcon} alt="search" className={classNames.image} />
      </button>
    </form>
  );
};
