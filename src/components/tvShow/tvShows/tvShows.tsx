import { ItemsControl } from '@components/UI/itemsControl/itemsControl';
import { TVShowList } from '@components/tvShow/tvShowList/tvShowList';
import { Loader } from '@components/UI/loader/loader';
import { useGetShowsQuery } from '../../../store/tvShowsApi';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';
import classNames from './tvShows.module.css';

export function TVShows() {
  const state = useSelector((state: RootState) => state.tvShows);
  const { data = [], isFetching } = useGetShowsQuery({
    searchTerm: state.searchTerm,
    page: state.page,
    pageSize: state.pageSize,
  });

  if (isFetching) {
    return <Loader />;
  }

  if (data.length <= 0) {
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
