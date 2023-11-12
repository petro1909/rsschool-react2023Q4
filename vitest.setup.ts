import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
afterEach(() => {
  localStorage.clear();
  cleanup();
  vi.clearAllMocks();
});
