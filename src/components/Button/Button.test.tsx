import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button and is visible', () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeVisible();
  });

  test('changes background color when in disabled state', () => {
    render(<Button text="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toHaveStyleRule('background-color', '#cccccc');
    expect(buttonElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});