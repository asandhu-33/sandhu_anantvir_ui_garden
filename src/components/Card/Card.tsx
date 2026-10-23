import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div<{ $disabled?: boolean; backgroundColor?: string }>`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) =>
    props.$disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    transform: ${(props) => (props.$disabled ? 'none' : 'translateY(-4px)')};
    box-shadow: ${(props) =>
      props.$disabled ? '0 4px 6px rgba(0, 0, 0, 0.05)' : '0 8px 12px rgba(0, 0, 0, 0.1)'};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardImage = styled.img<{ $disabled?: boolean }>`
  width: 100%;
  height: 160px;
  object-fit: cover;
  filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #333333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'This is a description of the card content.',
  imageSrc,
  imageAlt = 'Card image',
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <CardContainer
      $disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
      data-testid="card-element"
    >
      {imageSrc && <CardImage src={imageSrc} alt={imageAlt} $disabled={disabled} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
    </CardContainer>
  );
};