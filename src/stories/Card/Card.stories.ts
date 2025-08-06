import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Card from './Card.vue';

const meta = {
  title: 'Components/Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <h2 class="text-lg font-semibold">Card Title</h2>
        <p class="text-gray-500">This is a simple card component.</p>
      </Card>
    `
  })
};
