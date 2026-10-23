import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(<RadioButton label="Test Radio" name="test" value="1" />);
    const radioElement = screen.getByTestId('radio-element');
    expect(radioElement).toBeVisible();
  });

  test('applies disabled state correctly', () => {
    render(<RadioButton label="Disabled Radio" name="test" value="1" disabled={true} />);
    const radioElement = screen.getByTestId('radio-element');
    expect(radioElement).toBeDisabled();
  });
});