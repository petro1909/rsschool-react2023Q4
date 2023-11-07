import { Card } from '@components/tvShow/tvShowCard/tvShowCard';
import { TVShow } from '@app_types/api/tvShow';
import classNames from './tvShowList.module.css';

export type TVShowListProps = {
  items: Array<TVShow>;
};

export function TVShowList({ items }: TVShowListProps) {
  return (
    <section className={classNames.itemsWrapper}>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </section>
  );
}
