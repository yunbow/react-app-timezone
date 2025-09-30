import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: '変換',
    onClick: () => console.log('Primary button clicked'),
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: '現在時刻を設定',
    onClick: () => console.log('Success button clicked'),
  },
};