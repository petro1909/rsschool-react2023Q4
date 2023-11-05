import React, { ChangeEvent, useEffect, useState } from 'react';
import { getValueByKeyFromLocalStorage } from '../../service/storageService';
import { CustomForm } from '../UI/customForm/customForm';
import searchIcon from '../../assets/search.svg';
import classNames from './searchBar.module.css';
import { useTVShowsSearchParams } from '../../hooks/useTVShowsSearchParams';
import { useLocation } from 'react-router';

export const SearchBar = () => {
  const [text, setText] = useState('');
  const updateTVShowsParams = useTVShowsSearchParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const currentSearchTerm = getValueByKeyFromLocalStorage();
    setText(currentSearchTerm);
  }, []);

  const search = () => {
    const pageSizeStr = Number(queryParams.get('pageSize'));
    const pageSize = !isNaN(pageSizeStr) ? pageSizeStr : 10;
    updateTVShowsParams({ searchTerm: text, page: 1, pageSize: pageSize });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <CustomForm
      inputProps={{ type: 'text', placeholder: 'search', value: text, change: handleInputChange }}
      submitProps={{ submitFn: search }}
    >
      <img src={searchIcon} className={classNames.searchImage}></img>
    </CustomForm>
  );
};
