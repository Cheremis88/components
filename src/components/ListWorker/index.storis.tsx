import type { Meta, StoryObj } from '@storybook/react';
import ListWorker from '.';

const meta: Meta<typeof ListWorker> = {
  title: 'Large/ListWorker',
  component: ListWorker,
  parameters: {
    layout: 'centered',
  },
  decorators: [
		(Story) => (
			<div style={{ width: '70vw' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Кошмар на улице Вязов'
  },
};