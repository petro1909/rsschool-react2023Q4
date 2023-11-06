import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemsControl } from '@components/UI/itemsControl/itemsControl';
import { TVShowList } from '@components/tvShow/tvShowList/tvShowList';
import { Loader } from '@components/UI/loader/loader';
import { useTVShowSearch } from '@hooks/useTVShowSearch';
import { getValueByKeyFromLocalStorage } from '@service/storageService';
import { TVShowResults } from '@app_types/api/apiResults';
import classNames from './tvShows.module.css';

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

  return (
    <>
      {loaded ? (
        <>
          {searchResult?.items?.length > 0 ? (
            <>
              <ItemsControl resultsConfig={searchResult.config} />
              <TVShowList items={searchResult.items} />
              <ItemsControl resultsConfig={searchResult.config} />
            </>
          ) : (
            <div className={classNames.emptyItems}>Nothing was found for the specified request</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
