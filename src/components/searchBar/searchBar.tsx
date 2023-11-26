import { FormEvent, useEffect, useState } from 'react';
import searchIcon from '../../public/search.svg';
import classNames from './searchBar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getTVshowsQueryParams } from '@service/queryParamsService';

export const SearchBar = () => {
  const [text, setText] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { searchQuery } = getTVshowsQueryParams(router.query);
    setText(searchQuery);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({ query: { ...router.query, searchQuery: text, page: 1 } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testId="input"
        type="text"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" data-testId="submit">
        <Image src={searchIcon} alt="search" className={classNames.image} width={50} height={50} />
      </button>
    </form>
  );
};
