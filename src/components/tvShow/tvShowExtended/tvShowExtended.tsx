import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../UI/loader/loader';

import { ExtendedTVShov } from '../../../types/api/tvShow';
import { ApiService } from '../../../service/apiService';

import parse from 'html-react-parser';
import classNames from './tvShowExtended.module.css';
import closeImage from '../../../assets/close.svg';

export function TVShowExtended() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tvShowId = searchParams.get('detailed');

  const [item, setItem] = React.useState<Partial<ExtendedTVShov>>({});
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
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
              <section className={classNames.item}>
                <section className={classNames.itemTitle}>
                  <h3>{item.title}</h3>
                  <h3>{item.titleOriginal}</h3>
                </section>
                <section>
                  <img src={item.image} alt={item.title} className={classNames.itemImage} />
                </section>
                <section className={classNames.itemInfo}>
                  <p>
                    <span>Platform:</span>
                    <span>{item.network?.title}</span>
                  </p>
                  <p>
                    <span>Country:</span>
                    <span>{item.network?.country}</span>
                  </p>
                  <p>
                    <span>Year:</span>
                    <span>{item.year}</span>
                  </p>
                  <p>
                    <span>Status:</span>
                    <span>{item.status}</span>
                  </p>
                  <p>
                    <span>Started:</span>
                    <span>{item.started}</span>
                  </p>
                  <p>
                    <span>Ended:</span>
                    <span>{item.ended}</span>
                  </p>
                </section>
                <section className={classNames.itemRatings}>
                  <p>
                    <span>Rating:</span>
                    <span>{item.rating}</span>
                    <span>{'Voted: (' + item.voted + ')'}</span>
                  </p>
                  <p>
                    <span>
                      <a href={item.imdbUrl}>Imdb rating:</a>
                    </span>
                    <span>{item.imdbRating}</span>
                    <span>{'Voted: (' + item.imdbVoted + ')'}</span>
                  </p>
                  <p>
                    <span>
                      <a href={item.kinopoiskUrl}>KP rating:</a>
                    </span>
                    <span>{item.kinopoiskRating}</span>
                    <span>{'Voted: (' + item.kinopoiskVoted + ')'}</span>
                  </p>
                </section>
                <section className={classNames.itemDescription}>
                  <p>{parse(item.description!)}</p>
                </section>
              </section>
            ) : (
              <Loader />
            )}
          </section>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
}
