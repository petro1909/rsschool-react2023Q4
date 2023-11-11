import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './app';

describe('App component', () => {
  it('should display 404 page when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );
    screen.debug();
    const notFountElement = screen.getByTestId('not-found');
    expect(notFountElement).toBeInTheDocument();
  });
});
