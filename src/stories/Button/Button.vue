<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import type { Icon } from '@tabler/icons-vue';

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    label?: string;
    size?: 'base' | 'sm';
    variant?: 'primary' | 'success' | 'danger';
    icon?: Icon;
    iconOnly?: boolean;
    disabled?: boolean;
  }>(),
  {
    size: 'base'
  }
);

const variants = {
  primary:
    'text-white bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-300 active:bg-primary-700 disabled:bg-primary-300 dark:disabled:bg-primary-800! dark:disabled:text-gray-500!',
  success:
    'text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:ring-green-300 active:bg-green-700 disabled:bg-green-300 dark:disabled:bg-green-800 dark:disabled:text-gray-500',
  danger:
    'text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-300 active:bg-red-700 disabled:bg-red-300 dark:disabled:bg-red-800 dark:disabled:text-gray-500'
};

const buttonVariant = computed(
  () =>
    (props.variant && variants[props.variant]) ??
    'hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-300 active:bg-gray-100'
  // not-disabled:dark:hover:bg-gray-900 not-disabled:dark:focus:bg-gray-900 not-disabled:dark:active:bg-gray-800 disabled:bg-transparent disabled:text-gray-500
);

const buttonSize = computed(() => [
  props.size === 'base' && 'gap-2 rounded-lg',
  // props.size === 'base' && !props.iconOnly && 'px-3 py-2',
  props.size === 'base' && props.iconOnly && 'size-10'
  // props.size === 'sm' && 'gap-1.5 text-sm rounded-md',
  // props.size === 'sm' && !props.iconOnly && 'px-2 py-1.5',
  // props.size === 'sm' && props.iconOnly && 'size-2'
]);

// const variantClass = computed(() => [
//   // !props.variant &&
//   //   'hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-300 active:bg-gray-100 not-disabled:dark:hover:bg-gray-900 not-disabled:dark:focus:bg-gray-900 not-disabled:dark:active:bg-gray-800 disabled:bg-transparent disabled:text-gray-500',
//   props.variant === 'primary' &&
//     `bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-300 active:bg-primary-700 disabled:bg-primary-300 dark:disabled:bg-primary-800 dark:disabled:text-gray-500`,
//   props.variant === 'green' &&
//     `bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 focus:ring-green-300 active:bg-green-700 disabled:bg-green-300 dark:disabled:bg-green-800 dark:disabled:text-gray-500`,
//   props.variant === 'red' &&
//     `bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-red-300 active:bg-red-700 disabled:bg-red-300 dark:disabled:bg-red-800 dark:disabled:text-gray-500`
// ]);
</script>

<template>
  <button
    :class="[
      'ui-control flex cursor-pointer items-center justify-center border-transparent! font-medium',
      buttonVariant,
      buttonSize
    ]"
    :disabled
  >
    <slot />

    <template v-if="!(slots.default && slots.default().length)">
      <component v-if="icon" :is="icon" aria-hidden="true" size="1.25em" />
      <span :class="{ 'sr-only': iconOnly }">{{ label }}</span>
    </template>
  </button>
</template>
