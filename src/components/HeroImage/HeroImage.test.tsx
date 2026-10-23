import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image with title and is visible', () => {
    render(<HeroImage src="test.jpg" alt="Hero banner" title="Hello World" />);
    const heroElement = screen.getByTestId('heroimage-element');
    const titleElement = screen.getByText('Hello World');
    expect(heroElement).toBeVisible();
    expect(titleElement).toBeVisible();
  });

  test('applies disabled styling correctly', () => {
    render(<HeroImage src="test.jpg" alt="Disabled hero" disabled={true} />);
    const heroElement = screen.getByTestId('heroimage-element');
    expect(heroElement).toHaveStyleRule('opacity', '0.4');
    expect(heroElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});