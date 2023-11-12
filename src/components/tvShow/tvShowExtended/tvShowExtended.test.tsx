import { ApiService } from '@service/apiService';
import { fakeItem } from '@test/fakeItems';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TVShowExtended } from './tvShowExtended';

const fakeItemId = fakeItem.id;

describe('extended card component', () => {
  beforeEach(() => {
    vi.spyOn(ApiService, 'getShowById').mockReturnValue(
      new Promise((resolve) => resolve(fakeItem))
    );
  });
  it('should display loading indicator while fetching data', () => {
    render(
      <MemoryRouter initialEntries={[`/?detailed=${fakeItemId}`]}>
        <TVShowExtended />
      </MemoryRouter>
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should correctly displays the detailed card data', async () => {
    render(
      <MemoryRouter initialEntries={[`/?detailed=${fakeItemId}`]}>
        <TVShowExtended />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
    const titleElement = await screen.findByText(fakeItem.title);
    expect(titleElement).toBeInTheDocument();
  });
  it('should hide the component by clicking the close button', async () => {
    render(
      <MemoryRouter initialEntries={[`/?detailed=${fakeItemId}`]}>
        <TVShowExtended />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
    const closeButton = screen.getByTestId('close_card');
    fireEvent.click(closeButton);

    const extendedTVShovElement = screen.queryByTestId('detailed-card');
    expect(extendedTVShovElement).not.toBeInTheDocument();
  });
});
