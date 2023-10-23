import React from 'react';
import Card from '../card/Card';
import './cards.css';
import { CardsProps } from './cardsProps';

export default class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <section className="items-wrapper">
        {this.props.items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    );
  }
}
