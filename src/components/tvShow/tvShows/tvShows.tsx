import React, { createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemsControl } from '@components/UI/itemsControl/itemsControl';
import { TVShowList } from '@components/tvShow/tvShowList/tvShowList';
import { Loader } from '@components/UI/loader/loader';
import { useTVShowSearch } from '@hooks/useTVShowSearch';
import { getValueByKeyFromLocalStorage } from '@service/storageService';
import { TVShowResults } from '@app_types/api/apiResults';
import classNames from './tvShows.module.css';
import { TVShow } from '@app_types/api/tvShow';

export const TVShowsContext = createContext<TVShow[]>([]);

export function TVShows() {
  const [searchResult, setSearchResult] = React.useState<TVShowResults>({
    items: [],
    config: {
      totalCount: 0,
      currentPage: 0,
      pageSize: 0,
    },
  });
  const [loaded, setLoaded] = React.useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchQuery = getValueByKeyFromLocalStorage();
  const makeTVShowSearch = useTVShowSearch();

  useEffect(() => {
    setLoaded(false);
    makeTVShowSearch().then((result) => {
      setSearchResult(result);
      setLoaded(true);
    });
  }, [searchQuery, queryParams.get('page'), queryParams.get('pageSize')]);

  if (!loaded) {
    return <Loader />;
  }

  if (searchResult.items?.length <= 0) {
    return (
      <div className={classNames.emptyItems} data-testid="no-items">
        Nothing was found for the specified request
      </div>
    );
  }

  return (
    <TVShowsContext.Provider value={searchResult.items}>
      <TVShowList />
      <ItemsControl resultsConfig={searchResult.config} />
    </TVShowsContext.Provider>
  );
}
