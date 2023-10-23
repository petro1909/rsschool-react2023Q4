import React from 'react';
import { CardProps } from './cardProps';
import './card.css';

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <section className="item-wrapper">
        <div className="item-property-wrapper">
          <span className="item-property-name">Name: </span>
          <span className="item-property-value">{this.props.item.name}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Height: </span>
          <span className="item-property-value">{this.props.item.height}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Mass: </span>
          <span className="item-property-value">{this.props.item.mass}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Hair color: </span>
          <span className="item-property-value">{this.props.item.hair_color}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Skin color: </span>
          <span className="item-property-value">{this.props.item.skin_color}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Eye color: </span>
          <span className="item-property-value">{this.props.item.eye_color}</span>
        </div>
        <div className="item-property-wrapper">
          <span className="item-property-name">Birth year: </span>
          <span className="item-property-value">{this.props.item.birth_year}</span>
        </div>
      </section>
    );
  }
}
