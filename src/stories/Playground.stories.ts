import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Playground from './Playground.vue';

const meta = {
  title: 'Playground',
  component: Playground,
  render: () => ({
    components: { Playground },
    template: '<playground />'
  }),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Playground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
