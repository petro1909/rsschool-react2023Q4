export type TVShow = {
  id: number;
  title: string;
  titleOriginal: string;
  status: string;
  totalSeasons: number;
  year: number;
  watching: number;
  voted: number;
  rating: number;
  images: Array<string>;
  image: string;
  onlineCount: string | null;
  promoUrl: string | null;
  category: string;
};

export type ExtendedTVShov = TVShow & TVShovAdditionalInfo;

type TVShovAdditionalInfo = {
  description: string;
  totalSeasons: number;
  country: string;
  countryTitle: string;
  started: string;
  ended: string;
  kinopoiskId: number;
  kinopoiskRating: number;
  kinopoiskVoted: number;
  kinopoiskUrl: string;
  tvrageId: number;
  imdbId: string;
  imdbRating: number;
  imdbVoted: number;
  imdbUrl: string;
  watchingTotal: number;
  runtime: number;
  runtimeTotal: string;
  genreIds: [number];
  network: {
    id: number;
    title: string;
    country: string;
  };
  episodes: [
    {
      id: number;
      title: string;
      showId: number;
      seasonNumber: number;
      episodeNumber: number;
      airDate: string;
      airDateUTC: string;
      images: [string];
      image: string;
      shortName: string;
      commentsCount: number;
      isSpecial: number;
    }
  ];
  onlineLinks: [
    {
      title: string;
      description: string;
      source: string;
      url: string;
    }
  ];
  onlineLinkExclusive: {
    title: string;
    description: string;
    source: string;
    url: string;
  };
};
