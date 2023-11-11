import { storageKey } from '@service/storageService';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { SearchBar } from './searchBar';
describe('Search bar component', () => {
  afterEach(() => {
    localStorage.clear();
    cleanup();
  });
  const test_value = 'test_value';
  it('should saves the entered value after clicking the Search button to the local storage', () => {
    render(<SearchBar />, { wrapper: BrowserRouter });

    const searchInput = screen.getByTestId('input');
    fireEvent.change(searchInput, { target: { value: test_value } });

    const searchSubmit = screen.getByTestId('submit');
    fireEvent.click(searchSubmit);

    const localStorageCurrentValue = localStorage.getItem(storageKey);
    expect(localStorageCurrentValue).toEqual(test_value);
  });
  it('should retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem(storageKey, test_value);
    render(<SearchBar />, { wrapper: BrowserRouter });

    const searchInput = screen.getByTestId('input') as HTMLInputElement;

    expect(searchInput.value).toEqual(test_value);
  });
});
