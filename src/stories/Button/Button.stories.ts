import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHeart } from '@tabler/icons-vue';
import { fn } from 'storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['base', 'small'] },
    variant: { control: 'select', options: ['primary', 'red', 'green'] },
    expanded: { control: 'boolean' },
    icon: { control: false },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Button',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

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
  args: { size: 'small' }
};

export const Expanded: Story = {
  args: { expanded: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const WithIcon: Story = {
  args: { icon: IconHeart }
};

export const IconOnly: Story = {
  args: {
    icon: IconHeart,
    iconOnly: true
  }
};
