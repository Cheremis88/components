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
    add(value) {
      console.log(value)
    },
    filter(value) {
      console.log(value)
    },
    error: 'Пример ошибки'
  },
};