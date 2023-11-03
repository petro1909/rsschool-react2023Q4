import { Card } from '../tvShowCard/tvShowCard';
import { TVShowListProps } from './tvShowListProps';
import classNames from './tvShowList.module.css';
export function TVShowList(props: TVShowListProps) {
  return (
    <section className={classNames.itemsWrapper}>
      {props.items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </section>
  );
}
