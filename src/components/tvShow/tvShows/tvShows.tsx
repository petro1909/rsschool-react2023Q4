import { ItemsControl } from '../../UI/itemsControl/itemsControl';
import { TVShowList } from '../tvShowList/tvShowList';
import { TVShowsProps } from './tvShowsProps';

export function TVShows(props: TVShowsProps) {
  return (
    <>
      <ItemsControl searchFn={props.searchFn} resultsConfig={props.config} />
      <TVShowList items={props.items} />
    </>
  );
}
