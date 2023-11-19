import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { TVShows } from './tvShows';
import { renderWithProviders } from '@test/reduxRender';

describe('TVShows component', () => {
  it('should display appropriate message if no cards are present', async () => {
    renderWithProviders(
      <MemoryRouter>
        <TVShows />
      </MemoryRouter>
    );
    const itemsMissingElement = await screen.findByTestId('no-items');
    expect(itemsMissingElement).toBeInTheDocument();
  });
});
