import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: 600;
  padding: 4px 8px;
  display: inline-block;
  color: ${(props) => (props.disabled ? '#888888' : props.textColor || '#333333')};
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Default Label',
  disabled = false,
  backgroundColor,
  textColor,
  htmlFor,
}) => {
  return (
    <StyledLabel
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      htmlFor={htmlFor}
      data-testid="label-element"
    >
      {text}
    </StyledLabel>
  );
};