import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconHeart } from '@tabler/icons-vue';
import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['base', 'sm'] },
    variant: { control: 'select', options: ['primary', 'success', 'danger'] },
    icon: { control: false },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    default: { table: { disable: true } } // remove slot from Storybook interface
  },
  args: {
    label: 'Button',
    size: 'base'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' }
};

export const Success: Story = {
  args: { variant: 'success' }
};

export const Danger: Story = {
  args: { variant: 'danger' }
};

export const Default: Story = {
  args: { variant: undefined }
};

export const Small: Story = {
  args: {
    variant: 'primary',
    icon: IconHeart,
    size: 'sm'
  }
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: IconHeart
  }
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: IconHeart,
    iconOnly: true
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true
  }
};
