import type { Meta, StoryObj } from '@storybook/react';
import Title from '.';

const meta: Meta<typeof Title> = {
  title: 'Mini/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    return <Title separator>Список фильмов</Title>
  }
}