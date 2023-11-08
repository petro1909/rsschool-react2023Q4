import { TVShowCard } from '@components/tvShow/tvShowCard/tvShowCard';
import classNames from './tvShowList.module.css';
import { useContext } from 'react';
import { TVShowsContext } from '../tvShows/tvShows';

export function TVShowList() {
  const items = useContext(TVShowsContext);
  return (
    <section className={classNames.itemsWrapper}>
      {items.map((item, index) => (
        <TVShowCard key={index} item={item} />
      ))}
    </section>
  );
}
