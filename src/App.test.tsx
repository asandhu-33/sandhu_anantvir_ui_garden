import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Garden heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sandhu Anantvir - UI Garden/i);
  expect(linkElement).toBeInTheDocument();
});