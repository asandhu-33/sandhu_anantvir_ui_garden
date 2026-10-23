import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => (props.$disabled ? '#888888' : '#333333')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  user-select: none;
`;

const StyledInput = styled.input<{ $disabled?: boolean }>`
  accent-color: #007bff;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <StyledLabel $disabled={disabled} data-testid="radio-wrapper">
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        $disabled={disabled}
        data-testid="radio-element"
      />
      {label}
    </StyledLabel>
  );
};