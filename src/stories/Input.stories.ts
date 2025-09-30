import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateTimeLocal: Story = {
  args: {
    type: 'datetime-local',
    value: '2023-12-25T15:30',
    onChange: (value: string) => console.log('Input changed:', value),
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    value: 'テキスト入力',
    onChange: (value: string) => console.log('Text changed:', value),
  },
};