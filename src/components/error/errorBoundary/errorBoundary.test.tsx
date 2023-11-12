import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorButton } from '../errorButton/errorButton';
import { ErrorBoundary } from './errorBoundary';

describe('ErrorBoundary component', () => {
  it('should display error fallback', () => {
    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    );
    const errorButton = screen.getByTestId('error-button');
    fireEvent.click(errorButton);
    const errorFallback = screen.getByTestId('error-fallback');
    expect(errorFallback).toBeInTheDocument();
  });
});
