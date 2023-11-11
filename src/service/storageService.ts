export const storageKey = 'searchValue';

export function getValueByKeyFromLocalStorage(): string {
  const value = localStorage.getItem(storageKey);
  if (!value) {
    return '';
  }
  return value;
}

export function setValueByKeyToLocalStorage(value: string): void {
  localStorage.setItem(storageKey, value);
}
