import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Select from './Select.vue';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    expanded: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Select your country',
    options: [
      { value: 'fr', text: 'France' },
      { value: 'uk', text: 'United Kingdom' },
      { value: 'es', text: 'Spain' }
    ]
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: { expanded: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};
