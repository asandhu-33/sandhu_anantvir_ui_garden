import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImage = styled.img<{ $disabled?: boolean; width?: string; height?: string }>`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  object-fit: cover;
  border-radius: 4px;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      $disabled={disabled}
      data-testid="img-element"
    />
  );
};