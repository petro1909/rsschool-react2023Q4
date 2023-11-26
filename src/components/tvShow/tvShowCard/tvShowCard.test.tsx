import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TVShowCard } from './tvShowCard';
import '@testing-library/jest-dom';
import { fakeItem } from '@test/fakeItems';
import { TVShowExtended } from '../tvShowExtended/tvShowExtended';
import { renderWithProviders } from '@test/reduxRender';

describe('TVShowCard component', () => {
  vi.mock('next/router', () => require('next-router-mock'));

  it('should relevant data that presented in fakeItem', () => {
    render(<TVShowCard item={fakeItem} />);
    const itemTitleElement = screen.getByTestId(fakeItem.title);
    const itemTitle = itemTitleElement.innerHTML;
    expect(itemTitleElement).toBeInTheDocument();
    expect(itemTitle).toEqual(fakeItem.title);
  });
  it('should open detailed card component when clicking on card', async () => {
    renderWithProviders(
      <>
        <TVShowCard item={fakeItem} />
        <TVShowExtended />
      </>
    );
    const cardElement = screen.getByTestId('tvShowCardElement');
    fireEvent.click(cardElement);

    const extendedTVShovElement = screen.getByTestId('detailed_card');
    expect(extendedTVShovElement).toBeInTheDocument();
  });
});
