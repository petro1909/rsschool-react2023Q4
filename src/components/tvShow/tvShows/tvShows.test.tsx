import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TVShows } from './tvShows';
import { renderWithProviders } from '@test/reduxRender';
import { server } from '../../../../test/setupTests';
import { createHandlers } from '@test/mockServer';
describe('TVShows component', () => {
  vi.mock('next/router', () => require('next-router-mock'));
  it('should display appropriate message if no cards are present', async () => {
    server.use(...createHandlers(true));
    renderWithProviders(<TVShows />);
    const itemsMissingElement = await screen.findByTestId('no-items');
    expect(itemsMissingElement).toBeInTheDocument();
  });
});
