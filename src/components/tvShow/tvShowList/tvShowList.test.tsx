import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fakeItems } from '@test/fakeItems';
import { describe, expect, it } from 'vitest';
import { TVShowsContext } from '../tvShows/tvShows';
import { TVShowList } from './tvShowList';

describe('TVShowList component', () => {
  it('should rended the specified number of cards', () => {
    render(
      <TVShowsContext.Provider value={fakeItems}>
        <TVShowList />
      </TVShowsContext.Provider>,
      { wrapper: MemoryRouter }
    );
    const tvShowElementList = screen.getAllByTestId('tvShowCardElement');
    expect(tvShowElementList.length).toEqual(fakeItems.length);
  });
});
