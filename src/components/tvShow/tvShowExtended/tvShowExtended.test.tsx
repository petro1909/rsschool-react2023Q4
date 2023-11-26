import { fakeItem } from '@test/fakeItems';
import { renderWithProviders } from '@test/reduxRender';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TVShowExtended } from './tvShowExtended';
import mockRouter from 'next-router-mock';

const fakeItemId = fakeItem.id;

describe('extended card component', () => {
  vi.mock('next/router', () => require('next-router-mock'));

  it('should correctly displays the detailed card data', async () => {
    mockRouter.push(`/?detailedId=${fakeItemId}`);
    renderWithProviders(<TVShowExtended />);

    const titleElement = await screen.findByText(fakeItem.title);
    screen.debug();
    expect(titleElement).toBeInTheDocument();
  });
  it('should hide the component by clicking the close button', async () => {
    mockRouter.push(`/?detailedId=${fakeItemId}`);
    renderWithProviders(<TVShowExtended />);

    const closeButton = screen.getByTestId('close_card');
    fireEvent.click(closeButton);

    const extendedTVShovElement = screen.queryByTestId('detailed-card');
    expect(extendedTVShovElement).not.toBeInTheDocument();
  });
});
