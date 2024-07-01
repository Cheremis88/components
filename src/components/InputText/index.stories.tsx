import type { Meta, StoryObj } from '@storybook/react';
import InputText from '.';

const meta: Meta<typeof InputText> = {
  title: 'Mini/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Кошмар на улице Вязов'
  },
};