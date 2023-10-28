import { Card } from '../card/card';
import classNames from './cards.module.css';
import { CardsProps } from './cardsProps';
import { Page } from '../page/page';

export function Cards(props: CardsProps) {
  let cardsSection = <div className={classNames.itemsLoader} />;
  if (props.isLoaded) {
    cardsSection = (
      <>
        <section className={classNames.itemsNumber}>
          <span className={classNames.itemsNumberTotal}>Total results: {props.count}</span>
          <span className={classNames.itemsNumberPage}>Results on page: {props.items.length}</span>
        </section>
        <section className={classNames.itemsWrapper}>
          {props.items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </section>
        <Page />
      </>
    );
  }
  return <section>{cardsSection}</section>;
}
