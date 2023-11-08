import { useSearchParams } from 'react-router-dom';
import { TVShow } from '@app_types/api/tvShow';
import classNames from './tvShowCard.module.css';

export type CardProps = {
  item: TVShow;
};

export function TVShowCard({ item }: CardProps) {
  const [, setSearchParams] = useSearchParams();

  const openExtendedShowCard = () => {
    setSearchParams((params) => {
      params.set('detailed', `${item.id}`);
      return params;
    });
  };

  return (
    <section className={classNames.itemWrapper} onClick={openExtendedShowCard}>
      <div className={classNames.itemImage}>
        <img src={item.image}></img>
      </div>
      <div className={classNames.itemInfo}>
        <section>
          <h3 className={classNames.itemHeader}>{item.title}</h3>
          <h3 className={classNames.itemHeader}>{item.titleOriginal}</h3>
        </section>
        <hr />
        <section>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Rating: </span>
            <span className={classNames.itemPropertyValue}>{item.rating}</span>
            <span className={classNames.itemPropertyValue}>(Votes: {item.voted} )</span>
          </div>
        </section>
        <section>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Status: </span>
            <span className={classNames.itemPropertyValue}>{item.status}</span>
          </div>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Total Seasons: </span>
            <span className={classNames.itemPropertyValue}>{item.totalSeasons}</span>
          </div>
          <div className={classNames.itemPropertyWrapper}>
            <span className={classNames.itemPropertyName}>Year: </span>
            <span className={classNames.itemPropertyValue}>{item.year}</span>
          </div>
        </section>
      </div>
    </section>
  );
}
