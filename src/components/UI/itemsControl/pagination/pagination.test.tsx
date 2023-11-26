import { renderWithProviders } from '@test/reduxRender';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ItemsControl } from '../itemsControl';
import mockRouter from 'next-router-mock';

describe('Pagination component', () => {
  vi.mock('next/router', () => require('next-router-mock'));
  it('should update search page parameter if page is changed', async () => {
    const targetPage = '2';
    renderWithProviders(<ItemsControl />);

    const secondPageButton = await screen.findByTestId(targetPage);
    fireEvent.click(secondPageButton);

    const { page } = mockRouter.query;

    expect(page).toEqual(+targetPage);
  });
});
