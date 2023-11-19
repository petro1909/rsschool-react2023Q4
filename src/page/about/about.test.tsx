import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './about';

describe('about page component', () => {
  it('should render about page', () => {
    render(<About />);
    const aboutElement = screen.getByText('About');
    expect(aboutElement).toBeInTheDocument();
  });
});
