import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { TVShows } from './tvShows';
import * as useTVShowSearchHook from '@hooks/useTVShowSearch';

describe('TVShows component', () => {
  it('should display appropriate message if no cards are present', async () => {
    const useTVShowSearchMock = vi.spyOn(useTVShowSearchHook, 'useTVShowSearch');
    useTVShowSearchMock.mockReturnValue(function () {
      return new Promise((resolve) =>
        resolve({
          items: [],
          config: {
            totalCount: 0,
            currentPage: 0,
            pageSize: 0,
          },
        })
      );
    });
    render(<TVShows />, { wrapper: MemoryRouter });
    const itemsMissingElement = await screen.findByTestId('no-items');
    expect(itemsMissingElement).toBeInTheDocument();
    useTVShowSearchMock.mockClear();
  });
});
