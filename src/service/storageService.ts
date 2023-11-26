export const storageKey = 'searchValue';

export function getValueFromLocalStorage(): string {
  return typeof window !== 'undefined' ? localStorage.getItem(storageKey) || '' : '';
}

export function setValueToLocalStorage(value: string): void {
  localStorage.setItem(storageKey, value);
}
