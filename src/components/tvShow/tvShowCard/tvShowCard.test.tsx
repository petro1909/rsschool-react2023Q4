import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TVShowCard } from './tvShowCard';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { fakeItem } from '@test/fakeItems';
import { renderCardRouter } from '@test/renderCardRoutes';

describe('TVShowCard component', () => {
  it('should relevant data that presented in fakeItem', () => {
    render(<TVShowCard item={fakeItem} />, { wrapper: MemoryRouter });
    const itemTitleElement = screen.getByTestId(fakeItem.title);
    const itemTitle = itemTitleElement.innerHTML;
    expect(itemTitleElement).toBeInTheDocument();
    expect(itemTitle).toEqual(fakeItem.title);
  });
  it('should open detailed card component when clicking on card', async () => {
    renderCardRouter();
    const cardElement = screen.getByTestId('tvShowCardElement');
    fireEvent.click(cardElement);

    const extendedTVShovElement = screen.getByTestId('detailed_card');
    expect(extendedTVShovElement).toBeInTheDocument();
  });
  it('should trigger an additional API call to fetch detailed information', async () => {
    const mockedFetch = vi.spyOn(global, 'fetch');
    renderCardRouter();

    const cardElement = await screen.findByTestId('tvShowCardElement');
    fireEvent.click(cardElement);

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });
});
