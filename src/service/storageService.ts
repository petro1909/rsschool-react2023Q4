export const storageKey = 'searchValue';

export function getValueByKeyFromLocalStorage(): string {
  return localStorage.getItem(storageKey) || '';
}

export function setValueByKeyToLocalStorage(value: string): void {
  localStorage.setItem(storageKey, value);
}
