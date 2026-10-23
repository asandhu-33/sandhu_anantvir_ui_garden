import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: { control: 'boolean' },
    height: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner',
    title: 'Explore UI Garden',
    subtitle: 'Build your applications with high-quality components',
    height: '300px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Disabled Hero banner',
    title: 'Disabled Hero',
    subtitle: 'Currently unavailable',
    height: '300px',
    disabled: true,
  },
};