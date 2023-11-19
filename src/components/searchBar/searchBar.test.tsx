import { storageKey } from '@service/storageService';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from './searchBar';
import { renderWithProviders } from '@test/reduxRender';
describe('Search bar component', () => {
  const test_value = 'test_value';
  it('should saves the entered value after clicking the Search button to the local storage', () => {
    localStorage.setItem(storageKey, test_value);
    renderWithProviders(<SearchBar />);
    const searchInput = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: test_value } });

    const searchSubmit = screen.getByTestId('submit');
    fireEvent.click(searchSubmit);

    const localStorageCurrentValue = localStorage.getItem(storageKey);
    expect(localStorageCurrentValue).toEqual(test_value);
  });
  it('should retrieves the value from the local storage upon mounting', () => {
    const getItemSpy = vi.spyOn(localStorage, 'getItem');

    localStorage.setItem(storageKey, test_value);
    renderWithProviders(<SearchBar />);
    const searchInput = screen.getByTestId('input') as HTMLInputElement;
    expect(getItemSpy).toHaveBeenCalledTimes(1);
    expect(searchInput.value).toEqual(test_value);
  });
});
