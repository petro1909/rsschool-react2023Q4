import { createHandlers } from './mockServer';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterEach, vi, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
export const server = setupServer(...createHandlers());

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
  cleanup();
  vi.clearAllMocks();
});

afterAll(() => server.close());
