import { TVShowResultsConfig } from '@app_types/api/apiResults';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Pagination } from './pagination';

describe('Pagination component', () => {
  it('should update search page parameter if page is changed', () => {
    const targetPage = '2';
    const config: TVShowResultsConfig = { totalCount: 50, currentPage: 1, pageSize: 10 };
    render(<Pagination resultsConfig={config} />, { wrapper: BrowserRouter });
    const secondPageButton = screen.getByTestId(targetPage);
    fireEvent.click(secondPageButton);

    const searchParams = new URLSearchParams(window.location.search);
    const pageNumber = searchParams.get('page');

    expect(pageNumber).toEqual(targetPage);
  });
});
