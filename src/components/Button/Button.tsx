import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text = 'Click Me',
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
      data-testid="button-element"
    >
      {text}
    </StyledButton>
  );
};