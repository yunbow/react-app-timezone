import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select/Select';
import { TIMEZONE_OPTIONS } from '../Config';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimezoneSelect: Story = {
  args: {
    value: 'Asia/Tokyo',
    options: TIMEZONE_OPTIONS,
    onChange: (value: string) => console.log('Selected timezone:', value),
  },
};