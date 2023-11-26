import { ErrorButton } from '@components/error/errorButton/errorButton';
import { SearchBar } from '@components/searchBar/searchBar';
import { TVShows } from '@components/tvShow/tvShows/tvShows';
import { TVShowExtended } from '@components/tvShow/tvShowExtended/tvShowExtended';
import { wrapper } from '../redux/store';
import { getRunningQueriesThunk, getShowById, getShows, getShowsCount } from '../redux/tvShowsApi';
import classNames from './index.module.css';
import { getTVshowsQueryParams } from '@service/queryParamsService';

export default function Main() {
  return (
    <>
      <section className={classNames.header}>
        <SearchBar />
        <ErrorButton />
      </section>
      <section>
        <h1 className={classNames.title}>TV shows api search results</h1>
        <TVShows />
      </section>
      <TVShowExtended />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  const { searchQuery, page, pageSize, detailedId } = getTVshowsQueryParams(query);
  await store.dispatch(getShowsCount.initiate(searchQuery));

  await store.dispatch(getShows.initiate({ searchQuery, page, pageSize }));
  if (detailedId) {
    await store.dispatch(getShowById.initiate(detailedId));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return { props: {} };
});
