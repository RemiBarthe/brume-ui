<template>
  <button type="button" :class="classes" @click="onClick" :disabled>
    <component v-if="icon" :is="icon" aria-hidden="true" size="1.25em" />
    <span :class="{ 'sr-only': iconOnly }">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { Icon } from '@tabler/icons-vue';

const props = withDefaults(
  defineProps<{
    label: string;
    size?: 'base' | 'small';
    variant?: 'primary' | 'red' | 'green';
    expanded?: boolean;
    icon?: Icon;
    iconOnly?: boolean;
    disabled?: boolean;
  }>(),
  {
    size: 'base'
  }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => [
  'flex items-center justify-center font-medium cursor-pointer outline-none transition disabled:cursor-not-allowed focus:ring-3',

  // SIZES
  props.size === 'base' && 'gap-2 rounded-lg',
  props.size === 'base' && !props.iconOnly && 'px-3 py-2',
  props.size === 'base' && props.iconOnly && 'size-10',
  props.size === 'small' && 'gap-1.5 text-sm rounded-md',
  props.size === 'small' && !props.iconOnly && 'px-2 py-1.5',
  props.size === 'small' && props.iconOnly && 'size-8',
  props.expanded && 'w-full',

  // VARIANTS
  !props.variant &&
    'hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-300 active:bg-gray-100 not-disabled:dark:hover:bg-gray-900 not-disabled:dark:focus:bg-gray-900 not-disabled:dark:active:bg-gray-800 disabled:bg-transparent disabled:text-gray-500',
  props.variant === 'primary' &&
    `bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-300 active:bg-primary-700 disabled:bg-primary-100 disabled:text-primary-600 dark:disabled:bg-primary-800 dark:disabled:text-primary-300`,
  props.variant === 'green' &&
    `bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 focus:ring-green-300 active:bg-green-700 disabled:bg-green-100 disabled:text-green-600 dark:disabled:bg-green-800 dark:disabled:text-green-300`,
  props.variant === 'red' &&
    `bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-red-300 active:bg-red-700 disabled:bg-red-100 disabled:text-red-600 dark:disabled:bg-red-800 dark:disabled:text-red-300`
]);

const onClick = () => {
  emit('click', 1);
};
</script>
