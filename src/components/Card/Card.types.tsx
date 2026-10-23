export interface CardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}