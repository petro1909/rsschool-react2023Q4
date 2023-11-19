import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fakeItems } from '@test/fakeItems';
import { describe, expect, it } from 'vitest';
import { TVShowList } from './tvShowList';

describe('TVShowList component', () => {
  it('should rended the specified number of cards', () => {
    render(<TVShowList items={fakeItems} />, { wrapper: MemoryRouter });
    const tvShowElementList = screen.getAllByTestId('tvShowCardElement');
    expect(tvShowElementList.length).toEqual(fakeItems.length);
  });
});
