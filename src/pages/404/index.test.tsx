import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

describe('Pages Router', () => {
  it('should render 404 page', () => {
    render(<NotFound />);
    const notFoundElement = screen.getByText('Not found');
    expect(notFoundElement).toBeInTheDocument();
  });
});
