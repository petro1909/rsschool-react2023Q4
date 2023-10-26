import React from 'react';
import Card from '../card/card';
import classNames from './cards.module.css';
import { CardsProps } from './cardsProps';
import { Page } from '../page/page';

export default class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    let cardsSection;
    if (this.props.isLoaded) {
      cardsSection = (
        <>
          <section className={classNames.itemsNumber}>
            <span className={classNames.itemsNumberTotal}>
              Total results: {this.props.count}
            </span>
            <span className={classNames.itemsNumberPage}>
              Results on page: {this.props.items.length}
            </span>
          </section>
          <section className={classNames.itemsWrapper}>
            {this.props.items.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </section>
          <Page />
        </>
      );
    } else {
      cardsSection = <div className={classNames.itemsLoader} />;
    }
    return <section>{cardsSection}</section>;
  }
}
