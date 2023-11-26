import parse from 'html-react-parser';
import { Loader } from '@components/UI/loader/loader';
import { ItemProperty } from '@components/UI/itemProperty/itemProperty';
import { ItemRatingProperty } from '@components/UI/itemRatingProperty/itemRatingProperty';
import classNames from './tvShowExtended.module.css';
import { TVShowExtendedWrapper } from './tvShowExtendedWrapper';
import { useGetShowByIdQuery } from '../../../redux/tvShowsApi';
import { useRouter } from 'next/router';
import Image from 'next/image';

export function TVShowExtended() {
  const router = useRouter();

  const { data = null, isFetching } = useGetShowByIdQuery(+router.query.detailedId!);
  if (!router.query.detailedId) return null;
  if (isFetching) {
    return (
      <TVShowExtendedWrapper>
        <div className={classNames.loaderWrapper}>
          <Loader width={200} height={200} />
        </div>
      </TVShowExtendedWrapper>
    );
  }
  if (!data) {
    return (
      <TVShowExtendedWrapper>
        <div className={classNames.loaderWrapper}>
          <h1>There is no such data</h1>
        </div>
      </TVShowExtendedWrapper>
    );
  } else {
    return (
      <TVShowExtendedWrapper>
        <section className={classNames.item}>
          <section className={classNames.itemTitle}>
            <h3>{data.title}</h3>
            <h3>{data.titleOriginal}</h3>
          </section>
          <section>
            {data.image && (
              <Image src={data.image} alt={data.title || ''} className={classNames.itemImage} />
            )}
          </section>
          <section className={classNames.itemInfo}>
            <ItemProperty text="Platform:" value={data.network?.title} />
            <ItemProperty text="Country:" value={data.network?.country} />
            <ItemProperty text="Year:" value={data.year} />
            <ItemProperty text="Status:" value={data.status} />
            <ItemProperty text="Started:" value={data.started} />
            <ItemProperty text="Ended:" value={data.ended} />
          </section>
          <section className={classNames.itemRatings}>
            <ItemRatingProperty rating={data.rating} voted={data.voted}>
              Rating:
            </ItemRatingProperty>
            <ItemRatingProperty rating={data.imdbRating} voted={data.imdbVoted}>
              <a href={data.imdbUrl}>Imdb rating:</a>
            </ItemRatingProperty>
            <ItemRatingProperty rating={data.kinopoiskRating} voted={data.kinopoiskVoted}>
              <a href={data.kinopoiskUrl}>KP rating:</a>
            </ItemRatingProperty>
          </section>
          <section className={classNames.itemDescription}>
            <div>{data.description && parse(data.description!)}</div>
          </section>
        </section>
      </TVShowExtendedWrapper>
    );
  }
}
