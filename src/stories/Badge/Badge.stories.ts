import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHeart } from '@tabler/icons-vue';
import Badge from './Badge.vue';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['base', 'sm'] },
    variant: { control: 'select', options: ['base', 'primary', 'red', 'green'] },
    icon: { control: false },
    closable: { control: 'boolean' }
  },
  args: {
    label: 'Badge'
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: undefined }
};

export const Primary: Story = {
  args: { variant: 'primary' }
};

export const Green: Story = {
  args: { variant: 'green' }
};

export const Red: Story = {
  args: { variant: 'red' }
};

export const Small: Story = {
  args: { size: 'sm' }
};

export const WithIcon: Story = {
  args: { icon: IconHeart }
};

export const Closable: Story = {
  args: { closable: true }
};
