import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Emoji from './Emoji'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentUtility/Emoji',
  component: Emoji
} as ComponentMeta<typeof Emoji>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Emoji> = (args) => <Emoji {...args} />

export const LoveEmoji = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoveEmoji.args = {
  symbol: '🥰'
}

export const SmileEmoji = Template.bind({})
SmileEmoji.args = {
  symbol: '😀'
}
