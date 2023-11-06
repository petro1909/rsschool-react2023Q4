import { Card } from '@components/tvShow/tvShowCard/tvShowCard';
import { TVShow } from '@app_types/api/tvShow';
import classNames from './tvShowList.module.css';

export type TVShowListProps = {
  items: Array<TVShow>;
};

export function TVShowList(props: TVShowListProps) {
  return (
    <section className={classNames.itemsWrapper}>
      {props.items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </section>
  );
}
