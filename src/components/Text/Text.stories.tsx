import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'This is standard paragraph text.',
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'This text is disabled.',
    size: 'medium',
    disabled: true,
  },
};