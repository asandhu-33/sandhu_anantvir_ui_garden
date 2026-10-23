import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled?: boolean; backgroundColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.$disabled ? '#f0f0f0' : props.backgroundColor || '#ffffff'};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #007bff;
  color: white;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const TableFooter = styled.tfoot`
  font-weight: bold;
  background-color: #eeeeee;
`;

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  footerText,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTable
      $disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-element"
    >
      <thead>
        <TableRow>
          {headers.map((h, i) => (
            <TableHeader key={i}>{h}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {footerText && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={headers.length}>{footerText}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </StyledTable>
  );
};