import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option...',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Disabled dropdown',
    disabled: true,
  },
};