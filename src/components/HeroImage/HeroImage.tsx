import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ $disabled?: boolean; height?: string; $src: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '300px'};
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    z-index: 1;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 0 0 10px 0;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title = 'Welcome to Our Site',
  subtitle = 'Discover amazing components and features',
  height,
  disabled = false,
}) => {
  return (
    <HeroContainer
      $src={src}
      height={height}
      $disabled={disabled}
      role="img"
      aria-label={alt}
      data-testid="heroimage-element"
    >
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </HeroContainer>
  );
};