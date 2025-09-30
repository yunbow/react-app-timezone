import type { Meta, StoryObj } from '@storybook/react';
import { TimezoneConverter } from '../../features/timezone-converter/TimezoneConverter/TimezoneConverter';

const meta = {
  title: 'Features/TimezoneConverter',
  component: TimezoneConverter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimezoneConverter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};