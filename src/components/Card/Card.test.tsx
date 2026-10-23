import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card with title and is visible', () => {
    render(<Card title="Test Card" description="Card content" />);
    const cardElement = screen.getByTestId('card-element');
    const titleElement = screen.getByText('Test Card');
    expect(cardElement).toBeVisible();
    expect(titleElement).toBeVisible();
  });

  test('applies disabled styling correctly', () => {
    render(<Card title="Disabled" disabled={true} />);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toHaveStyleRule('background-color', '#f5f5f5');
    expect(cardElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});