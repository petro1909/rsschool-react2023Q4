import { TVShow } from '@app_types/api/tvShow';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TVShowCard } from './tvShowCard';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '@components/app/app';

const fakeItem: TVShow = {
  id: 331,
  title: 'Доктор Кто',
  titleOriginal: 'Doctor Who',
  status: 'Returning Series',
  totalSeasons: 14,
  year: 2005,
  watching: 148990,
  voted: 72399,
  rating: 4.56,
  images: ['caaab448e00bfbb60894053b9485c955.jpg'],
  image: 'https://media.myshows.me/shows/small/c/aa/caaab448e00bfbb60894053b9485c955.jpg',
  onlineCount: null,
  promoUrl:
    'https://hd.kinopoisk.ru/film/42f2dbf8769771ee8e369dae46e6e677?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=doctorwho13\u0026utm_content=main_page_popular_promo\u0026utm_term=all\u0026source=kinopoisk_paid_performance_myshows_doctorwho13_main_page_popular_promo_all\u0026erid=4CQwVszH9pNAsuH21RR',
  category: 'show',
};

describe('TVShowCard component', () => {
  it('should relevant data that presented in fakeItem', () => {
    render(<TVShowCard item={fakeItem} />, { wrapper: MemoryRouter });
    const itemTitleElement = screen.getByTestId(fakeItem.title);
    const itemTitle = itemTitleElement.innerHTML;
    expect(itemTitleElement).toBeInTheDocument();
    expect(itemTitle).toEqual(fakeItem.title);
  });
  it('should open detailed card component when clicking on card', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const cardsElements = await screen.findAllByTestId('tvShowCardElement');
    const firstCardElement = cardsElements[0];
    fireEvent.click(firstCardElement);

    const extendedTVShovElement = screen.getByTestId('detailed_card');
    expect(extendedTVShovElement).toBeInTheDocument();
  });
  it('should trigger an additional API call to fetch detailed information', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const cardsElements = await screen.findAllByTestId('tvShowCardElement');
    const firstCardElement = cardsElements[0];
    const mockedFetch = vi.spyOn(global, 'fetch');
    fireEvent.click(firstCardElement);

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });
});
