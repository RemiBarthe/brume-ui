import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Input from './Input.vue';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Name'
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: 'e.g. John Doe' }
};

export const ShowLabel: Story = {
  args: { showLabel: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};
