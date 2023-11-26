import { render, screen } from '@testing-library/react';
import { fakeItems } from '@test/fakeItems';
import { describe, expect, it, vi } from 'vitest';
import { TVShowList } from './tvShowList';
import { server } from '../../../../test/setupTests';
import { createHandlers } from '@test/mockServer';

describe('TVShowList component', () => {
  vi.mock('next/router', () => require('next-router-mock'));
  it('should rended the specified number of cards', () => {
    server.use(...createHandlers(true));
    render(<TVShowList items={fakeItems} />);
    const tvShowElementList = screen.getAllByTestId('tvShowCardElement');
    expect(tvShowElementList.length).toEqual(fakeItems.length);
  });
});
