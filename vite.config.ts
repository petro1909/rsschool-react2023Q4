/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@app_types': path.resolve(__dirname, './src/types'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@service': path.resolve(__dirname, './src/service'),
      '@page': path.resolve(__dirname, './src/page'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vite.config.ts'],
    coverage: {
      provider: 'v8',
      all: true,
      reporter: 'text',
    },
  },
});
