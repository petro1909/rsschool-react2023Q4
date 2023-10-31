import { Card } from '../card/card';
import classNames from './cards.module.css';
import { CardsProps } from './cardsProps';

export function Cards(props: CardsProps) {
  return (
    <>
      <section className={classNames.itemsNumber}>
        <span className={classNames.itemsNumberTotal}>Total results: {props.totalCount}</span>
        <span className={classNames.itemsNumberPage}>Results on page: {props.items.length}</span>
      </section>
      <section className={classNames.itemsWrapper}>
        {props.items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </>
  );
}
