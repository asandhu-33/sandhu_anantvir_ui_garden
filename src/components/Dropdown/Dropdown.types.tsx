export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string) => void;
}