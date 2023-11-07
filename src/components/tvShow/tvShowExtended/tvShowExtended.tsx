import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Loader } from '@components/UI/loader/loader';
import { ExtendedTVShov } from '@app_types/api/tvShow';
import { ApiService } from '@service/apiService';
import { ItemProperty } from '@components/UI/itemProperty/itemProperty';
import { ItemRatingProperty } from '@components/UI/itemRatingProperty/itemRatingProperty';
import classNames from './tvShowExtended.module.css';
import { TVShowExtendedWrapper } from './tvShowExtendedWrapper';

export function TVShowExtended() {
  const [searchParams] = useSearchParams();
  const tvShowId = searchParams.get('detailed');

  const [item, setItem] = React.useState<Partial<ExtendedTVShov> | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  useLayoutEffect(() => {
    console.log(item);
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

  if (!tvShowId) return null;
  if (!loaded) {
    return (
      <TVShowExtendedWrapper>
        <div className={classNames.loaderWrapper}>
          <Loader width={200} height={200} />
        </div>
      </TVShowExtendedWrapper>
    );
  }
  if (!item) {
    return (
      <TVShowExtendedWrapper>
        <div className={classNames.loaderWrapper}>
          <h1>There is no such item</h1>
        </div>
      </TVShowExtendedWrapper>
    );
  } else {
    return (
      <TVShowExtendedWrapper>
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
      </TVShowExtendedWrapper>
    );
  }
}
