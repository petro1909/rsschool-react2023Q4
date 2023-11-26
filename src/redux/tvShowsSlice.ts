import { TVShow } from '@app_types/api/tvShow';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const setInitialState = () => {
  const state: { items: TVShow[]; totalCount: number } = {
    items: [],
    totalCount: 0,
  };
  return state;
};

export const tvShowsSlice = createSlice({
  name: 'tvShowsSlice',
  initialState: setInitialState(),
  reducers: {
    setItems(state, action: PayloadAction<TVShow[]>) {
      state.items = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE system', action.payload);

      return {
        ...state,
        ...action.payload['tvShows'],
      };
    },
  },
});
export const { setItems, setTotalCount } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
