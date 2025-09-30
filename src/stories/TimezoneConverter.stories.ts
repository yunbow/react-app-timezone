import type { Meta, StoryObj } from '@storybook/react';
import { TimezoneConverter } from '../components/organisms/TimezoneConverter/TimezoneConverter';

const meta = {
  title: 'Organisms/TimezoneConverter',
  component: TimezoneConverter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimezoneConverter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};