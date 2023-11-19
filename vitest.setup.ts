import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi, beforeAll, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { createHandlers } from './test/mockServer';

const server = setupServer(...createHandlers());

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
