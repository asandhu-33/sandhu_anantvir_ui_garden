import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '20px' : '16px'};
  color: ${(props) => (props.disabled ? '#999999' : props.color || '#333333')};
  background-color: ${(props) =>
    props.disabled ? '#f9f9f9' : props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Text: React.FC<TextProps> = ({
  text = 'Default body text component.',
  size = 'medium',
  color,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledText
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="text-element"
    >
      {text}
    </StyledText>
  );
};