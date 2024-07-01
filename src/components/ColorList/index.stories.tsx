import type { Meta, StoryObj } from '@storybook/react';
import ColorList from '.';
import { FILMS } from '../../constants/variables';
import { addColor } from '../../helpers/addColor';

const filmsList = addColor(FILMS);

const meta: Meta<typeof ColorList> = {
  title: 'Middle/ColorList',
  component: ColorList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    list: filmsList
  },
};