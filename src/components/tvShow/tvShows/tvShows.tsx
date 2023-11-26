import { ItemsControl } from '@components/UI/itemsControl/itemsControl';
import { TVShowList } from '@components/tvShow/tvShowList/tvShowList';
import { useGetShowsQuery } from '../../../redux/tvShowsApi';
import classNames from './tvShows.module.css';
import { useRouter } from 'next/router';
import { getTVshowsQueryParams } from '@service/queryParamsService';

export function TVShows() {
  const router = useRouter();
  const { searchQuery, page, pageSize } = getTVshowsQueryParams(router.query);

  const { data = [] } = useGetShowsQuery({
    searchQuery,
    page,
    pageSize,
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
