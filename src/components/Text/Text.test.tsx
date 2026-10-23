import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders the text element and is visible', () => {
    render(<Text text="Sample text" />);
    const textElement = screen.getByTestId('text-element');
    expect(textElement).toBeVisible();
  });

  test('changes background color when in disabled state', () => {
    render(<Text text="Disabled text" disabled={true} />);
    const textElement = screen.getByTestId('text-element');
    expect(textElement).toHaveStyleRule('background-color', '#f9f9f9');
    expect(textElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});