import { ErrorButton } from '@components/error/errorButton/errorButton';
import { SearchBar } from '@components/searchBar/searchBar';
import { TVShows } from '@components/tvShow/tvShows/tvShows';
import { TVShowExtended } from '@components/tvShow/tvShowExtended/tvShowExtended';
import { wrapper } from '../redux/store';
import { getRunningQueriesThunk, getShowById, getShows, getShowsCount } from '../redux/tvShowsApi';
import classNames from './index.module.css';

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
  const searchQuery = query.searchQuery ? (query.searchQuery as string) : '';
  const page = !isNaN(Number(query.page)) ? Number(query.page) : 1;
  const pageSize = !isNaN(Number(query.pageSize)) ? Number(query.pageSize) : 10;
  const detailedId = Number(query.detailedId);
  await store.dispatch(getShowsCount.initiate(searchQuery));

  await store.dispatch(getShows.initiate({ searchTerm: searchQuery, page, pageSize }));
  if (detailedId) {
    await store.dispatch(getShowById.initiate(detailedId));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return { props: {} };
});
