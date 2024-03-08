import type { Meta, StoryObj } from '@storybook/react'

import DancersPage from './DancersPage'

const meta: Meta<typeof DancersPage> = {
  component: DancersPage,
}

export default meta

type Story = StoryObj<typeof DancersPage>

export const Primary: Story = {}
