import { TVShowsSearchProps } from '@app_types/tvshowSearchProps';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getValueByKeyFromLocalStorage,
  setValueByKeyToLocalStorage,
} from '@service/storageService';

const setInitialState = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = getValueByKeyFromLocalStorage();
  const pageSizeParam = Number(urlParams.get('pageSize'));
  const pageSize = !isNaN(pageSizeParam) && pageSizeParam > 0 ? pageSizeParam : 10;

  const pageParam = Number(urlParams.get('page'));
  const page = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

  const state: TVShowsSearchProps = {
    searchTerm,
    page,
    pageSize,
  };
  return state;
};

export const tvShowsSlice = createSlice({
  name: 'tvShowsSlice',
  initialState: setInitialState(),
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      setValueByKeyToLocalStorage(action.payload);
      state.searchTerm = action.payload;
      state.page = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
      state.page = 1;
    },
  },
});
export const { setSearchTerm, setCurrentPage, setPageSize } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
