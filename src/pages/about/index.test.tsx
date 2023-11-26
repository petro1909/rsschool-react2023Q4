import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './index';

describe('Pages Router', () => {
  it('should render about page', () => {
    render(<About />);
    const aboutElement = screen.getByText('About');
    expect(aboutElement).toBeInTheDocument();
  });
});
