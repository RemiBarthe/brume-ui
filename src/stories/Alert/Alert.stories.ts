import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Alert from '../Alert/Alert.vue';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'error', 'success'] },
    dismissible: { control: 'boolean' }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { type: 'info' }
};

export const Error: Story = {
  args: { type: 'error' }
};

export const Success: Story = {
  args: { type: 'success' }
};

export const Dismissible: Story = {
  args: {
    type: 'info',
    dismissible: true
  }
};

export const Expanded: Story = {
  args: {
    type: 'info'
  }
};
