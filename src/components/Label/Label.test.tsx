import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders the label and is visible', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByTestId('label-element');
    expect(labelElement).toBeVisible();
  });

  test('changes background color when in disabled state', () => {
    render(<Label text="Disabled Label" disabled={true} />);
    const labelElement = screen.getByTestId('label-element');
    expect(labelElement).toHaveStyleRule('background-color', '#e0e0e0');
    expect(labelElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});