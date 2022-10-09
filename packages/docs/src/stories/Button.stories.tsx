import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps> // obj global todas as variações herdam dele {children: "Enviar"}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
