import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['ID', 'Component', 'Status'],
    rows: [
      ['1', 'Button', 'Complete'],
      ['2', 'Label', 'Complete'],
      ['3', 'Text', 'Complete'],
    ],
    footerText: 'Total Components: 3',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};