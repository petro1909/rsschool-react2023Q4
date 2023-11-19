import { TVShow } from '@app_types/api/tvShow';
import { TVShowCard } from '@components/tvShow/tvShowCard/tvShowCard';
import classNames from './tvShowList.module.css';

export function TVShowList({ items }: { items: TVShow[] }) {
  return (
    <section className={classNames.itemsWrapper}>
      {items.map((item, index) => (
        <TVShowCard key={index} item={item} />
      ))}
    </section>
  );
}
