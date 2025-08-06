import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Select from './Select.vue';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    placeholder: { control: 'text' },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Select your country',
    options: {
      fr: 'France',
      uk: 'United Kingdom',
      es: 'Spain'
    }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Choose your country' }
};

export const ShowLabel: Story = {
  args: { showLabel: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};
