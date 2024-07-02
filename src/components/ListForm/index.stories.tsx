import type { Meta, StoryObj } from '@storybook/react';
import ListForm from '.';

const meta: Meta<typeof ListForm> = {
  title: 'Middle/ListForm',
  component: ListForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    callback: s => console.log(s)
  },
};