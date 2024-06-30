import type { Meta, StoryObj } from '@storybook/react';
import ColorItem from '.';

const meta = {
  title: 'Mini/ColorItem',
  component: ColorItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ColorItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Свадьба в Малиновке',
    backgroundColor: 'blue'
  },
};