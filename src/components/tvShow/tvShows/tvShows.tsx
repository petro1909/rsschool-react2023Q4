import { ItemsControl } from '@components/UI/itemsControl/itemsControl';
import { TVShowList } from '@components/tvShow/tvShowList/tvShowList';
import { useGetShowsQuery } from '../../../redux/tvShowsApi';
import classNames from './tvShows.module.css';
import { useRouter } from 'next/router';

export function TVShows() {
  const router = useRouter();
  const { query } = router;
  const searchQuery = query.searchQuery ? (query.searchQuery as string) : '';
  const page = !isNaN(Number(query.page)) ? Number(query.page) : 1;
  const pageSize = !isNaN(Number(query.pageSize)) ? Number(query.pageSize) : 10;
  const { data = [] } = useGetShowsQuery({
    searchTerm: searchQuery,
    page: page,
    pageSize: pageSize,
  });

  if (data.length === 0) {
    return (
      <div className={classNames.emptyItems} data-testid="no-items">
        Nothing was found for the specified request
      </div>
    );
  }

  return (
    <>
      <TVShowList items={data} />
      <ItemsControl />
    </>
  );
}
