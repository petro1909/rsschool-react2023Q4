import React from 'react';
import { CardProps } from './cardProps';
import classNames from './card.module.css';

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <section className={classNames.itemWrapper}>
        <h3 className={classNames.itemHeader}>{this.props.item.name}</h3>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Height: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.height}
          </span>
        </div>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Mass: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.mass}
          </span>
        </div>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Hair color: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.hair_color}
          </span>
        </div>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Skin color: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.skin_color}
          </span>
        </div>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Eye color: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.eye_color}
          </span>
        </div>
        <div className={classNames.itemPropertyWrapper}>
          <span className={classNames.itemPropertyName}>Birth year: </span>
          <span className={classNames.itemPropertyValue}>
            {this.props.item.birth_year}
          </span>
        </div>
      </section>
    );
  }
}
