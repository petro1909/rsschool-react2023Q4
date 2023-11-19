import { renderWithProviders } from '@test/reduxRender';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ItemsControl } from '../itemsControl';
describe('Pagination component', () => {
  it('should update search page parameter if page is changed', async () => {
    const targetPage = '2';
    renderWithProviders(
      <BrowserRouter>
        <ItemsControl />
      </BrowserRouter>
    );

    const secondPageButton = await screen.findByTestId(targetPage);
    fireEvent.click(secondPageButton);
    const searchParams = new URLSearchParams(window.location.search);
    const pageNumber = searchParams.get('page');

    expect(pageNumber).toEqual(targetPage);
  });
});
