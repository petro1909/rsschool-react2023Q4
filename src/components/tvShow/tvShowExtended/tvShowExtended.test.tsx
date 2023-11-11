import { ApiService } from '@service/apiService';
import { act, fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { TVShowExtended } from './tvShowExtended';

describe('extended card component', () => {
  it('should display loading indicator while fetching data', () => {
    vi.spyOn(ApiService, 'getShowById').mockReturnValue(
      new Promise((resolve) => resolve({ id: 123, title: 'test show' }))
    );
    act(() => {
      render(
        <MemoryRouter initialEntries={['/?detailed=123']}>
          <TVShowExtended />
        </MemoryRouter>
      );
    });

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should correctly displays the detailed card data', async () => {
    const item = { id: 123, title: 'test show' };
    vi.spyOn(ApiService, 'getShowById').mockReturnValue(new Promise((resolve) => resolve(item)));
    act(() => {
      render(
        <MemoryRouter initialEntries={['/?detailed=123']}>
          <TVShowExtended />
        </MemoryRouter>
      );
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const titleElement = await screen.findByText(item.title);
    expect(titleElement).toBeInTheDocument();
  });
  it('should hide the component by clicking the close button', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/?detailed=123']}>
          <TVShowExtended />
        </MemoryRouter>
      );
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const closeButton = screen.getByTestId('close_card');
    fireEvent.click(closeButton);

    const extendedTVShovElement = screen.queryByTestId('detailed-card');
    expect(extendedTVShovElement).not.toBeInTheDocument();
  });
});
