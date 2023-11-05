import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../UI/loader/loader';

import { ExtendedTVShov } from '../../../types/api/tvShow';
import { ApiService } from '../../../service/apiService';

import parse from 'html-react-parser';
import classNames from './tvShowExtended.module.css';
import closeImage from '../../../assets/close.svg';
import { ItemProperty } from '../../UI/itemProperty/itemProperty';
import { ItemRatingProperty } from '../../UI/itemRatingProperty/itemRatingProperty';

export function TVShowExtended() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tvShowId = searchParams.get('detailed');

  const [item, setItem] = React.useState<Partial<ExtendedTVShov> | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  useLayoutEffect(() => {
    if (tvShowId) {
      search();
    }
  }, [tvShowId]);

  const search = async () => {
    setLoaded(false);
    const fetchedItem = await ApiService.getShowById(Number(tvShowId)!);
    if (fetchedItem) {
      setItem(fetchedItem);
    }
    setLoaded(true);
  };

  const closeExtendedShowCard = () => {
    setSearchParams((params) => {
      params.delete('detailed');
      return params;
    });
  };

  return (
    <section>
      {tvShowId ? (
        <section className={classNames.itemPageWrapper}>
          <section className={classNames.overlay} onClick={() => closeExtendedShowCard()}></section>
          <section className={classNames.itemWrapper}>
            <section className={classNames.closeButton}>
              <img src={closeImage} onClick={() => closeExtendedShowCard()} />
            </section>
            {loaded ? (
              item ? (
                <section className={classNames.item}>
                  <section className={classNames.itemTitle}>
                    <h3>{item.title}</h3>
                    <h3>{item.titleOriginal}</h3>
                  </section>
                  <section>
                    <img src={item.image} alt={item.title} className={classNames.itemImage} />
                  </section>
                  <section className={classNames.itemInfo}>
                    <ItemProperty text="Platform:" value={item.network?.title} />
                    <ItemProperty text="Country:" value={item.network?.country} />
                    <ItemProperty text="Year:" value={item.year} />
                    <ItemProperty text="Status:" value={item.status} />
                    <ItemProperty text="Started:" value={item.started} />
                    <ItemProperty text="Ended:" value={item.ended} />
                  </section>
                  <section className={classNames.itemRatings}>
                    <ItemRatingProperty rating={item.rating} voted={item.voted}>
                      Rating:
                    </ItemRatingProperty>
                    <ItemRatingProperty rating={item.imdbRating} voted={item.imdbVoted}>
                      <a href={item.imdbUrl}>Imdb rating:</a>
                    </ItemRatingProperty>
                    <ItemRatingProperty rating={item.kinopoiskRating} voted={item.kinopoiskVoted}>
                      <a href={item.kinopoiskUrl}>KP rating:</a>
                    </ItemRatingProperty>
                  </section>
                  <section className={classNames.itemDescription}>
                    <div>{parse(item.description!)}</div>
                  </section>
                </section>
              ) : (
                <div className={classNames.loaderWrapper}>
                  <h1>There is no such item</h1>
                </div>
              )
            ) : (
              <div className={classNames.loaderWrapper}>
                <Loader width={200} height={200} />
              </div>
            )}
          </section>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
}
