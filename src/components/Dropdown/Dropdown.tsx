import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $disabled?: boolean; backgroundColor?: string }>`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$disabled ? '#f0f0f0' : props.backgroundColor || '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#333333')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  return (
    <StyledSelect
      $disabled={disabled}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.value)}
      data-testid="dropdown-element"
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};