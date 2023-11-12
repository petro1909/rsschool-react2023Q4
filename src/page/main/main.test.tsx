import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Main from './main';

describe('main page component', () => {
  it('should render main page', () => {
    render(<Main />, { wrapper: MemoryRouter });
    const pageTitleElement = screen.getByText('TV shows api search results');
    expect(pageTitleElement).toBeInTheDocument();
  });
});
