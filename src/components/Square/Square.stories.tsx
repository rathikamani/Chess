// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Square } from './Square';
import { Color } from '../../features/pieces/pieces.slice';
import '../Board/Board.css'

const meta: Meta<typeof Square> = {
  component: Square,
  argTypes: {
    color: {
      options: [Color.GRAY,Color.WHITE],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Square>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    const data = { file: 'b', rank: '1', color: Color.GRAY, bwPosition: '1/7/2/8', wbPosition: '8/2/9/3' }
    return <div className='Board'><Square  {...data} direction='BW' id="b_1" /></div>
  },
  args: {
    color: Color.GRAY,
  },
};