import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Featured Post',
    description: 'Learn how to build scalable UI components with React and Styled Components.',
    imageSrc: 'https://via.placeholder.com/300x160',
    imageAlt: 'Placeholder',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is currently unavailable or disabled.',
    imageSrc: 'https://via.placeholder.com/300x160',
    imageAlt: 'Placeholder disabled',
    disabled: true,
  },
};