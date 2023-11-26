import { fireEvent, screen, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from './searchBar';
import mockRouter from 'next-router-mock';

describe('Search bar component', () => {
  const test_value = 'test_value';

  vi.mock('next/router', () => require('next-router-mock'));

  it('should sat the entered to query params after clicking the Search button', () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: test_value } });

    const searchSubmit = screen.getByTestId('submit');
    fireEvent.click(searchSubmit);

    const { searchQuery } = mockRouter.query;

    expect(searchQuery).toEqual(test_value);
  });

  it('should retrieves the value from query params upon mounting', () => {
    mockRouter.push(`/?searchQuery=${test_value}`);

    render(<SearchBar />);
    const searchInput = screen.getByTestId('input') as HTMLInputElement;
    expect(searchInput.value).toEqual(test_value);
  });
});
