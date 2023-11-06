import { useLocation, useNavigate } from 'react-router-dom';
import { TVShow } from '@app_types/api/tvShow';
import classNames from './tvShowCard.module.css';

export type CardProps = {
  item: TVShow;
};

export function Card(props: CardProps) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const openExtendedShowCard = () => {
    queryParams.set('detailed', `${props.item.id}`);
    navigate({ search: queryParams.toString() });
  };

  return (
    <section className={classNames.itemWrapper} onClick={openExtendedShowCard}>
      <div className={classNames.itemImage}>
        <img src={props.item.image}></img>
      </div>
      <div className={classNames.itemInfo}>
        <section>
          <h3 className={classNames.itemHeader}>{props.item.title}</h3>
          <h3 className={classNames.itemHeader}>{props.item.titleOriginal}</h3>
        </section>
        <hr />
        <section>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Rating: </span>
            <span className={classNames.itemPropertyValue}>{props.item.rating}</span>
            <span className={classNames.itemPropertyValue}>(Votes: {props.item.voted} )</span>
          </div>
        </section>
        <section>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Status: </span>
            <span className={classNames.itemPropertyValue}>{props.item.status}</span>
          </div>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Total Seasons: </span>
            <span className={classNames.itemPropertyValue}>{props.item.totalSeasons}</span>
          </div>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Year: </span>
            <span className={classNames.itemPropertyValue}>{props.item.year}</span>
          </div>
        </section>
      </div>
    </section>
  );
}
