import type { Meta, StoryObj } from '@storybook/react';
import ListWorker from '.';

const meta: Meta<typeof ListWorker> = {
  title: 'Large/ListWorker',
  component: ListWorker,
  
  decorators: [
		(Story) => (
			<div style={{ width: '70vw', margin: 'auto' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};