import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders image and is visible', () => {
    render(<Img src="test.jpg" alt="Test image" />);
    const imgElement = screen.getByTestId('img-element');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', 'test.jpg');
  });

  test('applies disabled styling correctly', () => {
    render(<Img src="test.jpg" alt="Disabled image" disabled={true} />);
    const imgElement = screen.getByTestId('img-element');
    expect(imgElement).toHaveStyleRule('opacity', '0.4');
    expect(imgElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});