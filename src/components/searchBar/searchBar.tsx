import { ChangeEvent, useState } from 'react';
import { CustomForm } from '@components/UI/customForm/customForm';
import searchIcon from '@assets/search.svg';
import classNames from './searchBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setSearchTerm } from '../../store/tvShowsSlice';
import { useSearchParams } from 'react-router-dom';
export const SearchBar = () => {
  const searchTerm = useSelector((state: RootState) => state.tvShows.searchTerm);
  const [text, setText] = useState(searchTerm);
  const dispatch = useDispatch();

  const [, setQueryParams] = useSearchParams();
  const search = () => {
    setQueryParams((params) => {
      params.set('page', `${1}`);
      return params;
    });
    dispatch(setSearchTerm(text));
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
