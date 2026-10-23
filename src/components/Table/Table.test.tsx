import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

describe('Table Component', () => {
  const headers = ['Col 1', 'Col 2'];
  const rows = [['Data 1', 'Data 2']];

  test('renders table correctly and is visible', () => {
    render(<Table headers={headers} rows={rows} />);
    const tableElement = screen.getByTestId('table-element');
    expect(tableElement).toBeVisible();
  });

  test('applies disabled styling when disabled prop is true', () => {
    render(<Table headers={headers} rows={rows} disabled={true} />);
    const tableElement = screen.getByTestId('table-element');
    expect(tableElement).toHaveStyleRule('background-color', '#f0f0f0');
    expect(tableElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});