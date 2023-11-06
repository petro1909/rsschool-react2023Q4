import { Card } from '../tvShowCard/tvShowCard';
import classNames from './tvShowList.module.css';
import { TVShow } from '../../../types/api/tvShow';

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
