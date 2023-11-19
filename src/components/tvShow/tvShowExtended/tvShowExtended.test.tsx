import { fakeItem } from '@test/fakeItems';
import { renderWithProviders } from '@test/reduxRender';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { TVShowExtended } from './tvShowExtended';

const fakeItemId = fakeItem.id;

describe('extended card component', () => {
  it('should display loading indicator while fetching data', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/?detailed=${fakeItemId}`]}>
        <TVShowExtended />
      </MemoryRouter>
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should correctly displays the detailed card data', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/?detailed=${fakeItemId}`]}>
        <TVShowExtended />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
    const titleElement = await screen.findByText(fakeItem.title);
    expect(titleElement).toBeInTheDocument();
  });
  it('should hide the component by clicking the close button', async () => {
    renderWithProviders(
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
