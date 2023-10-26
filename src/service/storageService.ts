export function getValueByKeyFromLocalStorage(key: string): string {
  const value = localStorage.getItem(key);
  if (!value) {
    return '';
  }
  return value;
}

export function setValueByKeyToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}
