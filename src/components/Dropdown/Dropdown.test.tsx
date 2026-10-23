import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const options = [
    { label: 'Test 1', value: '1' },
    { label: 'Test 2', value: '2' },
  ];

  test('renders dropdown and is visible', () => {
    render(<Dropdown options={options} />);
    const dropdownElement = screen.getByTestId('dropdown-element');
    expect(dropdownElement).toBeVisible();
  });

  test('applies disabled styling when disabled prop is true', () => {
    render(<Dropdown options={options} disabled={true} />);
    const dropdownElement = screen.getByTestId('dropdown-element');
    expect(dropdownElement).toHaveStyleRule('background-color', '#f0f0f0');
    expect(dropdownElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});